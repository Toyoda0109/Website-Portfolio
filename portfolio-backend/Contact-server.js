const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser'); // Cookieを使うため
const csurf = require('csurf'); // CSRF対策
const helmet = require('helmet'); // helmet導入
const xss = require('xss'); // XSS対策
require('dotenv').config(); // 環境変数の読み込み

const app = express();

// ミドルウェア設定
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL, // 環境変数で指定
  credentials: true, // クッキーを送信できるように設定
}));
app.use(helmet()); // HTTPヘッダーを保護

// CSRF保護を追加
const csrfProtection = csurf({
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // 本番環境ではHTTPSを使用
    sameSite: process.env.NODE_ENV === 'production' ? 'Strict' : 'Lax', // 環境に応じて切り替え
  },
});

// フォーム表示用のエンドポイント（CSRFトークンを含む）
app.get('/form', csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() }); // CSRFトークンを返す
});

// フォームデータを受け取ってメールを送信するエンドポイント
app.post('/api/send-email', csrfProtection, async (req, res) => {
  const { name, email, message } = req.body;

  // データをサニタイズ
  const sanitizedEmail = xss(email);
  const sanitizedName = xss(name);
  const sanitizedMessage = xss(message);

  // Nodemailer設定
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: sanitizedEmail,
    to: process.env.EMAIL_USER,
    subject: 'お問い合わせ',
    text: `名前: ${sanitizedName}\nメール: ${sanitizedEmail}\nメッセージ:\n${sanitizedMessage}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('メールが送信されました');
  } catch (error) {
    console.error('メール送信エラー:', error.message);
    res.status(500).send('メールの送信に失敗しました');
  }
});

// サーバーの起動
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`サーバーがポート ${PORT} で起動しました`);
});
