import React from 'react';
import ReactDOM from 'react-dom/client';  // ReactDOMの新しいAPIをインポート
import App from './App';  // App.jsをインポート
import 'materialize-css/dist/css/materialize.min.css';  // MaterializeのCSSをインポート

// root要素に対してcreateRootを使用
const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  <React.StrictMode>
    <App />  {/* Appコンポーネントをレンダリング */}
  </React.StrictMode>
);
