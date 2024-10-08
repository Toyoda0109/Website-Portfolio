import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';  // 修正したCSSをインポート

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      await axios.post('http://localhost:3001/api/send-email', formData);
      setStatusMessage('Thank you for your message !!');  // 送信後のメッセージを設定
      setFormData({ name: '', email: '', message: '' });  // フォームをリセット
    } catch (error) {
      setStatusMessage('メールの送信に失敗しました');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h1>Contact</h1>
        <p>プラグインに関する質問や要望、エラー報告、その他のご連絡は、下記のフォームをご利用いただくか、X（旧Twitter）にてお知らせください！</p>
        <form onSubmit={handleSubmit} className="col s12">
          <div className="input-field">
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}  // 状態に基づいて値を更新
              onChange={handleChange}
              required
            />
            <label htmlFor="name">名前</label>
          </div>
          <div className="input-field">
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}  // 状態に基づいて値を更新
              onChange={handleChange}
              required
            />
            <label htmlFor="email">メールアドレス</label>
          </div>
          <div className="input-field">
            <textarea
              id="message"
              name="message"
              className="materialize-textarea"
              value={formData.message}  // 状態に基づいて値を更新
              onChange={handleChange}
              required
            />
            <label htmlFor="message">メッセージ</label>
          </div>
          <button
            className="custom-btn btn waves-effect waves-light"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? '送信中...' : '送信'}
          </button>
        </form>
        {statusMessage && <p className="thank-you-message">{statusMessage}</p>}  {/* 送信結果メッセージを大きく表示 */}
      </div>
    </div>
  );
};

export default Contact;
