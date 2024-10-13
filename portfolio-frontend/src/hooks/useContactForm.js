import { useState } from 'react';
import axios from 'axios';

export const useContactForm = () => {
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
      setStatusMessage('Thank you for your message !!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatusMessage('メールの送信に失敗しました');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    statusMessage,
    handleChange,
    handleSubmit,
  };
};
