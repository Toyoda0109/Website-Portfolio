import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import BulletinBoard from './BulletinBoard';
import Login from './Login';
import { useSectionObserver } from '../hooks/useSectionObserver'; 
import PLUGIN_OVERVIEW from './pluginSections/PLUGIN_OVERVIEW'; 
import PLUGIN_USAGE from './pluginSections/PLUGIN_USAGE';
import CHORD_LOGIC from './pluginSections/CHORD_LOGIC';
import PLUGIN_DOWNLOAD from './pluginSections/PLUGIN_DOWNLOAD';
import PLUGIN_POST from './pluginSections/PLUGIN_POST';
import './Plugin.css';

// プラグインの内容を定義
const pluginContents = [
  {
    label: 'プラグインの概要',
    link: '#PLUGIN_OVERVIEW',
    children: [
      { label: '対応環境', link: '#supported-environments' },
      { label: '対応コード', link: '#supported-chords' },
    ],
  },
  {
    label: 'プラグインの使用方法',
    link: '#PLUGIN_USAGE',
    children: [
      { label: '導入', link: '#supported-introduction' },
      { label: '機能', link: '#supported-function' },
    ],
  },
  {
    label: 'コード検出ロジック',
    link: '#CHORD_LOGIC',
    children: [{ label: 'コード検出ロジックについて', link: '#chord-logic-details' }],
  },
  { label: 'プラグインのダウンロード', link: '#PLUGIN_DOWNLOAD' },
  { label: 'POST', link: '#PLUGIN_POST' }
];

function Plugin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // ログイン状態を管理
  const [sections, setSections] = useState([]);         // セクション管理用のステートを追加

  const publishedDate = "2024-01-01";  // 公開日を手動で設定
  const updatedDate = new Date(document.lastModified).toLocaleDateString();  // 最終更新日を取得

  // セクションを監視するためのカスタムフック
  useEffect(() => {
    const mainSections = document.querySelectorAll('#PLUGIN_OVERVIEW, #PLUGIN_USAGE, #CHORD_LOGIC, #PLUGIN_DOWNLOAD, #PLUGIN_POST');
    setSections(mainSections);
  }, []);

  const activeSection = useSectionObserver(sections);  // カスタムフックでアクティブなセクションを取得

  // ログイン成功時の処理
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="plugin-page">
      <Sidebar contents={pluginContents} activeSection={activeSection} />

      <div className="plugin-content" id="top">
        <h4 className="plugin-title">【CHORDIN】和音コードをMIDI信号から検知するVSTプラグイン</h4>
        <p>公開日: {publishedDate} 最終更新日: {updatedDate}</p>
        <img src="/img/Plugin_title.png" alt="Plugin Title" className="plugin-title-image" />

        <div className="toc-container">
          <h2 className="toc-title">Contents</h2>
          <ol className="toc-list">
            {pluginContents.map((item, index) => (
              <li key={index}>
                {item.label}
                {item.children && (
                  <ol>
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>{child.label}</li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
          </ol>
        </div>

        <PLUGIN_OVERVIEW />
        <PLUGIN_USAGE />
        <CHORD_LOGIC />
        <PLUGIN_DOWNLOAD />
        <PLUGIN_POST />

        <BulletinBoard isAdmin={isLoggedIn} />

        {!isLoggedIn && (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    </div>
  );
}

export default Plugin;
