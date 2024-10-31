import React from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollVisibility } from '../hooks/useScrollVisibility';  // スクロール制御用カスタムフック
import { useMaterializeInit } from '../hooks/useMaterializeInit';  // Materialize初期化用カスタムフック
import { HashLink } from 'react-router-hash-link';  // HashLinkを使用
import './header.css';

function Header() {
  const isVisible = useScrollVisibility();  // ヘッダーの表示/非表示を制御
  useMaterializeInit();  // Materializeのコンポーネントを初期化
  const location = useLocation();  // 現在のパスを取得

  const logo = location.pathname === '/about' ? '/img/Portfolio_LOGO.png' : '/img/CHORDIN_LOGO.png';

  return (
    <header className={isVisible ? 'visible' : 'hidden'}>
      <nav>
        <div className="nav-wrapper">
          <HashLink to="/#top" className="brand-logo">
            <img src={logo} alt="Logo" />
          </HashLink>
          <a href="#" data-target="mobile-nav" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><HashLink to="/#top">Top</HashLink></li>
            <li><a className="dropdown-trigger" href="#" data-target="plugin-dropdown">Plugin</a></li>
            <li><a className="dropdown-trigger" href="#" data-target="about-dropdown">About</a></li> {/* About ドロップダウン */}
            <li><HashLink to="/contact">Contact</HashLink></li>
          </ul>
        </div>
      </nav>

      {/* Plugin ドロップダウンメニュー */}
      <ul id="plugin-dropdown" className="dropdown-content">
        <li><HashLink to="/plugin#PLUGIN_OVERVIEW">プラグインの概要</HashLink></li>
        <li><HashLink to="/plugin#PLUGIN_USAGE">プラグインの使用方法</HashLink></li>
        <li><HashLink to="/plugin#PLUGIN_DOWNLOAD">プラグインのダウンロード</HashLink></li>
        <li><HashLink to="/plugin#PLUGIN_POST">POST</HashLink></li>
      </ul>

      {/* About ドロップダウンメニュー */}
      <ul id="about-dropdown" className="dropdown-content">
        <li><HashLink to="/about#PROFILE_SECTION">Profile</HashLink></li>
        <li><HashLink to="/about#ABOUT_WEBSITE_SECTION">About this website</HashLink></li>
        <li><HashLink to="/about#SKILLS_SECTION">Skills</HashLink></li>
      </ul>

      {/* モバイル用サイドナビ */}
      <ul className="sidenav" id="mobile-nav">
        <li><HashLink to="/#top">Top</HashLink></li>
        <li><a className="dropdown-trigger" href="#" data-target="plugin-dropdown-mobile">Plugin</a></li>
        <li><a className="dropdown-trigger" href="#" data-target="about-dropdown-mobile">About</a></li>
        <li><HashLink to="/contact">Contact</HashLink></li>
      </ul>

      {/* モバイル用 Plugin ドロップダウン */}
      <ul id="plugin-dropdown-mobile" className="dropdown-content">
        <li><HashLink to="/plugin#PLUGIN_OVERVIEW">プラグインの概要</HashLink></li>
        <li><HashLink to="/plugin#PLUGIN_USAGE">プラグインの使用方法</HashLink></li>
        <li><HashLink to="/plugin#PLUGIN_DOWNLOAD">プラグインのダウンロード</HashLink></li>
        <li><HashLink to="/plugin#PLUGIN_POST">POST</HashLink></li>
      </ul>

      {/* モバイル用 About ドロップダウン */}
      <ul id="about-dropdown-mobile" className="dropdown-content">
        <li><HashLink to="/about#PROFILE_SECTION">Profile</HashLink></li>
        <li><HashLink to="/about#ABOUT_WEBSITE_SECTION">About this website</HashLink></li>
        <li><HashLink to="/about#SKILLS_SECTION">Skills</HashLink></li>
      </ul>
    </header>
  );
}

export default Header;
