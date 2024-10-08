import React from 'react';
import './Sidebar.css';  // サイドバーのCSSファイルをインポート

function Sidebar({ contents = [], activeSection }) {
  console.log('Active section in Sidebar:', activeSection);  // activeSectionが渡っているか確認

  return (
    <div>
      <aside className="sidebar">
        <ul className="sidebar-mainlist">
          {contents.map((item, index) => (
            <li key={index} className="sidebar-item">
              <span className="bullet"></span>
              {/* メインの見出しのみactiveクラスを適用 */}
              <a
                href={item.link}
                className={`sidebar-main-heading ${activeSection === item.link.substring(1) ? 'active' : ''}`}
              >
                {item.label}
              </a>

              {/* 子要素がある場合は、サブリストを表示。ただしactiveクラスは適用しない */}
              {item.children && (
                <ul className="sidebar-sublist">
                  {item.children.map((subItem, subIndex) => (
                    <li key={subIndex} className="sidebar-subitem">
                      <span className="bullet-sub"></span>
                      <a href={subItem.link} className="sidebar-sub-heading">
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
