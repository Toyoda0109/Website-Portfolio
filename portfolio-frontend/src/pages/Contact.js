import React, { useState } from 'react';
import { useContactForm } from '../hooks/useContactForm';
import './Contact.css';

const Contact = () => {
  const { formData, isSubmitting, statusMessage, handleChange, handleSubmit } = useContactForm();

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
