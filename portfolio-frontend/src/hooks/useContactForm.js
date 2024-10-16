import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import axios from 'axios';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [csrfToken, setCsrfToken] = useState('');  // CSRFトークン用の状態

  // CSRFトークンを取得するためのエフェクト
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('http://localhost:3001/form', {
          withCredentials: true,  // クッキーを含める
        });
        setCsrfToken(response.data.csrfToken);  // トークンを保存
      } catch (error) {
        console.error('CSRFトークンの取得に失敗しました:', error);
      }
    };
  
    fetchCsrfToken();
  }, []);

  // 入力データのサニタイズとメッセージの長さをチェック
  const handleChange = (e) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
    
    if (e.target.name === 'message' && sanitizedValue.length > 500) {
      setStatusMessage('メッセージは500文字以内にしてください。');
      return;
    }

    setFormData({
      ...formData,
      [e.target.name]: sanitizedValue,  // サニタイズされた値を使用
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setStatusMessage('Invalid email address');
      return;
    }
    
    setIsSubmitting(true);
    setStatusMessage('');
  
    try {
      await axios.post('http://localhost:3001/api/send-email', formData, {
        headers: {
          'CSRF-Token': csrfToken,  // CSRFトークンをヘッダーに含める
        },
        withCredentials: true,  // クッキーを送信するために追加
      });
      setStatusMessage('Thank you for your message!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatusMessage('メールの送信に失敗しました');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    isSubmitting,
    statusMessage,
    handleChange,
    handleSubmit,
  };
};
