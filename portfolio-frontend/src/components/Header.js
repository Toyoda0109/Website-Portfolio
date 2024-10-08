import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom'; // useLocation と Link をインポート
import M from 'materialize-css';
import './header.css';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;
  const location = useLocation();  // 現在のパスを取得

  // 画像の条件分岐
  const logo = location.pathname === '/about' ? '/img/Portfolio_LOGO.png' : '/img/CHORDIN_LOGO.png';

  useEffect(() => {
    // MaterializeのJavaScriptコンポーネントを初期化
    const sidenav = document.querySelectorAll('.sidenav');
    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    M.Sidenav.init(sidenav);
    M.Dropdown.init(dropdowns, {
      coverTrigger: false,  // ドロップダウンがトリガーの下に表示されるようにする
    });

    // スクロールイベントを設定
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // 下にスクロール -> ヘッダーを非表示
        setIsVisible(false);
      } else {
        // 上にスクロール -> ヘッダーを再表示
        setIsVisible(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 位置を更新
    };

    window.addEventListener('scroll', handleScroll);

    // クリーンアップ
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // スクロール処理
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <header className={isVisible ? 'visible' : 'hidden'}>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            {/* 動的にロゴ画像を切り替える */}
            <img src={logo} alt="Logo" />
          </Link>
          <a href="#" data-target="mobile-nav" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/#top">Top</Link> {/* Topページへ */}
            </li>
            <li>
              <a className="dropdown-trigger" href="#" data-target="plugin-dropdown">Plugin</a>
            </li>
            <li>
              <Link to="/about">About</Link> {/* Aboutページへ遷移 */}
            </li>
            <li>
              <Link to="/contact">Contact</Link> {/* Contactページへ遷移 */}
            </li>
          </ul>
        </div>
      </nav>

      {/* ドロップダウンメニュー */}
      <ul id="plugin-dropdown" className="dropdown-content">
        <li><Link to="/plugin#overview">プラグインの概要</Link></li>  {/* Pluginページに遷移 */}
        <li><Link to="/plugin#usage">プラグインの使用方法</Link></li> {/* Pluginページに遷移 */}
        <li><Link to="/plugin#download">プラグインのダウンロード</Link></li> {/* Pluginページに遷移 */}
        <li><Link to="/plugin#forum">掲示板</Link></li>  {/* Pluginページに遷移 */}
      </ul>

      <ul id="Contact-dropdown" className="dropdown-content">
        <li><a href="#email">メール</a></li>
        <li><a href="#social">ソーシャルメディア</a></li>
      </ul>

      {/* モバイル用サイドナビ */}
      <ul className="sidenav" id="mobile-nav">
        <li><Link to="/#top">Top</Link></li>
        <li>
          <a className="dropdown-trigger" href="#" data-target="plugin-dropdown-mobile">
            Plugin
          </a>
        </li>
        <li><Link to="/about">About</Link></li> {/* モバイルでもAboutページに遷移 */}
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <ul id="plugin-dropdown-mobile" className="dropdown-content">
        <li><Link to="/plugin#overview">プラグインの概要</Link></li>  {/* Pluginページに遷移 */}
        <li><Link to="/plugin#usage">プラグインの使用方法</Link></li>  {/* Pluginページに遷移 */}
        <li><Link to="/plugin#download">プラグインのダウンロード</Link></li>  {/* Pluginページに遷移 */}
        <li><Link to="/plugin#forum">掲示板</Link></li>  {/* Pluginページに遷移 */}
      </ul>
    </header>
  );
}

export default Header;
