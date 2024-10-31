import React, { useState, useEffect } from 'react';
import './HelloWorldAnimation.css';

const HelloWorldAnimation = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0); // indexをstateとして管理
  const text = "Hello World!";

  useEffect(() => {
    if (index < text.length) {
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1); // indexを更新
      }, 100);

      return () => clearInterval(interval); // クリーンアップ
    }
  }, [index]); // indexが変更されるたびにuseEffectが再実行される

  return (
    <div className="hello-world-container">
      <h1 className="hello-world-text">{displayedText}</h1>
    </div>
  );
};

export default HelloWorldAnimation;
