import React from 'react';
import { useAdminIp } from '../hooks/useAdminIp';  // IPチェック用フック
import { useLogin } from '../hooks/useLogin';  // ログイン処理用フック

const Login = ({ onLoginSuccess }) => {
  const isAdminIp = useAdminIp();  // カスタムフックでIPをチェック
  const {
    username,
    setUsername,
    password,
    setPassword,
    loginError,
    handleSubmit,
  } = useLogin(onLoginSuccess);  // カスタムフックでログインロジックを処理

  // 管理者IPでない場合、アクセス権限がないと表示
  if (!isAdminIp) {
    return <p>アクセス権がありません。</p>;
  }

  return (
    <div>
      <h2>管理者ログイン</h2>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}

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
