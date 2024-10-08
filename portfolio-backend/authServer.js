const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();

app.use(cors());
app.use(express.json());

const SECRET_KEY = 'your_secret_key';
const adminUser = { username: 'admin', password: bcrypt.hashSync('adminpassword', 10) };

// IPアドレスをチェックするAPIエンドポイント
app.get('/check-ip', (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('クライアントIPアドレス:', clientIp);  // ログ出力で確認

  // 管理者のIPアドレスを許可
  if (clientIp === '192.168.11.2' || clientIp === '::1') {
    res.json({ isAdmin: true });
  } else {
    res.json({ isAdmin: false });
  }
});

// ログインAPI
app.post('/login', (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('クライアントIPアドレス:', clientIp); // ここで出力があるか確認

  if (clientIp !== '192.168.11.2' && clientIp !== '::1' && clientIp !== '127.0.0.1') {
    return res.status(403).json({ message: 'アクセスが拒否されました。' });
  }

  // この部分が実行されていない場合、ここで処理が止まっている可能性があります
  console.log('リクエストデータ:', req.body);

  const { username, password } = req.body;
  console.log('受け取ったユーザー名:', username);
  console.log('受け取ったパスワード:', password);

  if (username === adminUser.username && bcrypt.compareSync(password, adminUser.password)) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'ログイン失敗' });
  }
});


// サーバー起動
app.listen(3002, () => {
  console.log('認証サーバーがポート3002で稼働中');
});
