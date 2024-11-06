import React from 'react';
import './TableOfContents.css'

function TableOfContents() {
  return (
    <div className="toc-container">
      <h2 className="toc-title">Contents</h2>
      <ol className="toc-list">
        {/* プラグインの概要 */}
        <li>
          <a href="#PLUGIN_OVERVIEW">プラグインの概要</a>
          <ol>
            <li><a href="#supported-environments">対応環境</a></li>
            <li><a href="#supported-chords">対応コード</a></li>
          </ol>
        </li>

        {/* プラグインの使用方法 */}
        <li>
          <a href="#PLUGIN_USAGE">プラグインの使用方法</a>
          <ol>
            <li><a href="#supported-introduction">導入</a></li>
            <li><a href="#supported-function">機能</a></li>
          </ol>
        </li>

        {/* コード検出ロジック */}
        <li>
          <a href="#CHORD_LOGIC">コード検出ロジック</a>
          <ol>
            <li><a href="#chord-logic-details">コード検出ロジックについて</a></li>
          </ol>
        </li>

        {/* プラグインのダウンロード */}
        <li>
          <a href="#PLUGIN_DOWNLOAD">プラグインのダウンロード</a>
        </li>

        {/* POST */}
        <li>
          <a href="#PLUGIN_POST">POST</a>
        </li>
      </ol>
    </div>
  );
}

export default TableOfContents;
