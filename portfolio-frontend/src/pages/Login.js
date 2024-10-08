import React, { useState, useEffect} from 'react';

const Login = ({ onLoginSuccess }) => {
  const [isAdminIp, setIsAdminIp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null); // ログイン失敗時のエラーメッセージ

  // 管理者IPかどうかをチェック
  useEffect(() => {
    const checkAdminIp = async () => {
      try {
        const response = await fetch('http://localhost:3002/check-ip');
        const data = await response.json();

        if (data.isAdmin) {
          setIsAdminIp(true);  // IPアドレスが管理者IPならログインフォームを表示
        } else {
          console.error('管理者IPではありません');
        }
      } catch (error) {
        console.error('IPチェックに失敗しました', error);
      }
    };

    checkAdminIp();  // コンポーネントが表示されるときにIPチェック
  }, []);

  // フォーム送信時の処理
  const handleSubmit = async (e) => {
    e.preventDefault(); // フォーム送信時のページリロードを防ぐ

    try {
      const response = await fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }), // フォームのユーザー名とパスワードを送信
      });

      const data = await response.json();
      if (response.ok) {
        onLoginSuccess(); // ログイン成功時に親コンポーネントに通知
        localStorage.setItem('token', data.token); // トークンを保存
      } else {
        setLoginError('ログインに失敗しました。ユーザー名またはパスワードが間違っています。');
      }
    } catch (error) {
      console.error('ログインエラー:', error);
      setLoginError('サーバーとの通信に失敗しました。');
    }
  };

  // 管理者IPでない場合、アクセス権限がないと表示
  if (!isAdminIp) {
    return <p>アクセス権がありません。</p>;
  }

  return (
    <div>
      <h2>管理者ログイン</h2>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>} {/* エラーメッセージ表示 */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default Login;
