import React from 'react';
import './Sidebar.css';

function Sidebar({ activeSection }) {
  console.log('Active section in Sidebar:', activeSection);  // activeSectionが渡っているか確認

  return (
    <aside className="sidebar">
      <ul className="sidebar-mainlist">
        {/* プラグインの概要 */}
        <li className="sidebar-item">
          <span className="bullet"></span>
          <a
            href="#PLUGIN_OVERVIEW"
            className={`sidebar-main-heading ${activeSection === 'PLUGIN_OVERVIEW' ? 'active' : ''}`}
          >
            プラグインの概要
          </a>
          <ul className="sidebar-sublist">
            <li className="sidebar-subitem">
              <span className="bullet-sub"></span>
              <a href="#supported-environments" className="sidebar-sub-heading">対応環境</a>
            </li>
            <li className="sidebar-subitem">
              <span className="bullet-sub"></span>
              <a href="#supported-chords" className="sidebar-sub-heading">対応コード</a>
            </li>
          </ul>
        </li>

        {/* プラグインの使用方法 */}
        <li className="sidebar-item">
          <span className="bullet"></span>
          <a
            href="#PLUGIN_USAGE"
            className={`sidebar-main-heading ${activeSection === 'PLUGIN_USAGE' ? 'active' : ''}`}
          >
            プラグインの使用方法
          </a>
          <ul className="sidebar-sublist">
            <li className="sidebar-subitem">
              <span className="bullet-sub"></span>
              <a href="#supported-introduction" className="sidebar-sub-heading">導入</a>
            </li>
            <li className="sidebar-subitem">
              <span className="bullet-sub"></span>
              <a href="#supported-function" className="sidebar-sub-heading">機能</a>
            </li>
          </ul>
        </li>

        {/* コード検出ロジック */}
        <li className="sidebar-item">
          <span className="bullet"></span>
          <a
            href="#CHORD_LOGIC"
            className={`sidebar-main-heading ${activeSection === 'CHORD_LOGIC' ? 'active' : ''}`}
          >
            コード検出ロジック
          </a>
          <ul className="sidebar-sublist">
            <li className="sidebar-subitem">
              <span className="bullet-sub"></span>
              <a href="#chord-logic-details" className="sidebar-sub-heading">コード検出ロジックについて</a>
            </li>
          </ul>
        </li>

        {/* プラグインのダウンロード */}
        <li className="sidebar-item">
          <span className="bullet"></span>
          <a
            href="#PLUGIN_DOWNLOAD"
            className={`sidebar-main-heading ${activeSection === 'PLUGIN_DOWNLOAD' ? 'active' : ''}`}
          >
            プラグインのダウンロード
          </a>
        </li>

        {/* POST */}
        <li className="sidebar-item">
          <span className="bullet"></span>
          <a
            href="#PLUGIN_POST"
            className={`sidebar-main-heading ${activeSection === 'PLUGIN_POST' ? 'active' : ''}`}
          >
            POST
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
