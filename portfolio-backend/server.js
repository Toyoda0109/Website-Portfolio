const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');  // Cookieを使うため
const csurf = require('csurf');  // CSRF対策
const helmet = require('helmet');  // helmet導入
const xss = require('xss');  // XSS対策

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',  // フロントエンドのオリジン
  credentials: true,  // クッキーを送信できるように設定
}));
app.use(helmet());  // helmetでHTTPヘッダーを保護

// CSRF保護を追加
const csrfProtection = csurf({
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',  // 本番環境ではHTTPSを使用
    sameSite: 'None',  // クロスオリジンのクッキーを許可
  }
});

// フォーム表示用のエンドポイント（CSRFトークンを含む）
app.get('/form', csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });  // CSRFトークンを返す
});

// フォームデータを受け取ってメールを送信するエンドポイント
app.post('/api/send-email', csrfProtection, async (req, res) => {
  const { name, email, message } = req.body;

  // データをサニタイズ
  const sanitizedEmail = xss(email);
  const sanitizedName = xss(name);
  const sanitizedMessage = xss(message);

  require('dotenv').config();

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: sanitizedEmail,
    to: 'muzica3939@gmail.com',
    subject: 'お問い合わせ',
    text: `名前: ${sanitizedName}\nメール: ${sanitizedEmail}\nメッセージ:\n${sanitizedMessage}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('メールが送信されました');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('メールの送信に失敗しました');
  }
});

// サーバーの起動
app.listen(3001, () => {
  console.log('サーバーがポート3001で起動しました');
});
