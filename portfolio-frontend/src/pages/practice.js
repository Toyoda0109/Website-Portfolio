import React, { useState, useEffect } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [isAdminIp, setIsAdminIp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

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
  })
}


