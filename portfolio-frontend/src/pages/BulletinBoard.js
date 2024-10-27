import React, { useState, useEffect } from 'react';

const BulletinBoard = ({ isAdmin }) => {
  const [posts, setPosts] = useState([]);

  // 投稿一覧を取得する関数
  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:8888/bulletin/fetch_posts.php');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('投稿の取得に失敗しました', error);
    }
  };

  useEffect(() => {
    fetchPosts(); // 初期表示時に投稿一覧を取得
  }, []);

  // 投稿を送信する関数 (管理者のみ使用)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // 管理者のトークンを使用
    try {
      const response = await fetch('http://localhost:8888/bulletin/submit.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // トークンを送信
        },
        body: JSON.stringify({ name: '管理者', comment: e.target.comment.value }),
      });

      const result = await response.json();
      if (result.success) {
        fetchPosts(); // 投稿後にリフレッシュ
      } else {
        console.error(`投稿エラー: ${result.error}`);
      }
    } catch (error) {
      console.error(`リクエストエラー: ${error.message}`);
    }
  };

  // if文を使ってフォームと投稿表示を制御
  let adminForm = null;
  if (isAdmin) {
    adminForm = (
      <form onSubmit={handleSubmit}>
        <textarea name="comment" placeholder="お知らせを入力" required />
        <button type="submit">投稿</button>
      </form>
    );
  }

  return (
    <div>
      {/* 管理者向けフォームの表示 */}
      {adminForm}

      <ul>
        {posts.map((post, index) => {
          let dateDisplay = '日付不明';
          if (post.created_at && !isNaN(new Date(post.created_at))) {
            dateDisplay = new Date(post.created_at).toLocaleString(); // 日付と時間を表示
          }

          return (
            <li key={index}>
              <strong style={{ color: 'blue' }}>{post.name}:</strong> {/* 管理者: の形式で表示 */}
              <span> {dateDisplay}</span>
              <p>{post.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BulletinBoard;
