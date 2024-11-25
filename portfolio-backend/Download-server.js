const express = require('express');
const app = express();
const path = require('path');

// ダウンロードのエンドポイントを作成
app.get('/api/download', (req, res) => {
  const filePath = path.join(__dirname, 'files/CHORDIN.zip');
  
  // ファイルをダウンロードとして提供
  res.download(filePath, 'CHORDIN.zip', (err) => {
    if (err) {
      console.log('エラーが発生しました: ', err);
      res.status(500).send('ファイルのダウンロード中にエラーが発生しました。');
    }
  });
});

// サーバーを起動
app.listen(3002, () => {
  console.log('サーバーがポート3002で起動しました');
});
