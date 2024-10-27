import { useState } from 'react';

export const useLogin = (onLoginSuccess) => {
  const [loginError, setLoginError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {

        setUsername(''); // ユーザー名をリセット
        setPassword(''); // パスワードをリセット
        // ログイン成功時の処理
        onLoginSuccess();
        localStorage.setItem('token', data.token);
        
      } else {
        setLoginError('ログインに失敗しました。ユーザー名またはパスワードが間違っています。');
      }
    } catch (error) {
      console.error('ログインエラー:', error);
      setLoginError('サーバーとの通信に失敗しました。');
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    loginError,
    handleSubmit,
  };
};
