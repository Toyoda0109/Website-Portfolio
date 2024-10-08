const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// フォームデータを受け取ってメールを送信するエンドポイント
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Nodemailerの設定
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'muzica3939@gmail.com',
      pass: 'nggabtmkyxcqupof', // アプリパスワードを使用
    },
  }); 

  // メールの内容
  let mailOptions = {
    from: email,
    to: 'muzica3939@gmail.com',
    subject: 'お問い合わせ',
    text: `名前: ${name}\nメール: ${email}\nメッセージ:\n${message}`,
  };

  try {
    // メールを送信
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
