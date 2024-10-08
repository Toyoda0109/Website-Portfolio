import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // React Routerのコンポーネントをインポート
import Header from './components/Header';
import Plugin from './pages/Plugin';
import About from './pages/About';  // About.jsをインポート
import Contact from './pages/Contact';  // Contact.jsをインポート
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-wrapper">
          <ConditionalSidebar /> {/* サイドバーを表示制御 */}
          <main className="content">
            <Routes>
              {/* Pluginページのルート */}
              <Route path="/plugin" element={<Plugin />} />
              {/* Aboutページのルート */}
              <Route path="/about" element={<About />} />
              {/* Contactページのルート */}
              <Route path="/contact" element={<Contact />} />
              {/* トップページのルート (デフォルト表示されるページ) */}
              <Route path="/" element={<Plugin />} />
              
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

function ConditionalSidebar() {
  const location = useLocation();  // 現在のURLパスを取得
  const noSidebarPaths = ['/about', '/contact'];  // サイドバーを表示しないパス

  // 現在のパスがnoSidebarPathsに含まれている場合はnullを返し、サイドバーを表示しない
  if (noSidebarPaths.includes(location.pathname)) {
    return null;
  }

  // それ以外の場合はサイドバーを表示
  return <Sidebar />;
}

export default App;
