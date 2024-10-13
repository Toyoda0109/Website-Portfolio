import React from 'react';
import './about.css'; // スタイルを追加する場合

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src="/img/Portfolio-Headimg.jpg" alt="Portfolio Header" className="portfolio-header-img" />
      </div>
      <section className="profile-section">
        <h1>Profile</h1>
        <div className="profile-content">
          <div className="profile-icon">
            <img src="/img/Skill_Icon/C.svg" alt="Profile" className="profile-img" />
          </div>
          <div className="profile-info">
            <h3>KODAI TOYODA</h3>
            <p>あああああああああああああああああああああああアアアアアアアaaaaaaaaaaaaaaaaaあ</p>
          </div>
        </div>
      </section>

      <section className="about-website-section">
        <h1>About this website</h1>
        <p>
          このWebサイトは、私のポートフォリオとして作成され、さまざまなプロジェクトやスキルを紹介するためのプラットフォームです。
          ReactとCSSを使用して作られ、最新の技術を用いて効率的かつ美しいデザインを実現しています。
        </p>

        {/* Frontend技術 */}
        <div className="tech-section">
          <h2>Frontend</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <img src="/img/Skill_Icon/React-Light.svg" alt="React" className="tech-img" />
              <p>React: UIの作成に使用しました</p>
            </div>

            <div className="tech-item">
              <img src="/img/Skill_Icon/css.svg" alt="CSS" className="tech-img" />
              <p>CSS: スタイリングに使用しました</p>
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/JavaScript.svg" alt="JavaScript" className="tech-img" />
              <p>JavaScript: ロジックの実装に使用しました</p>
            </div>
          </div>
        </div>

        {/* Backend技術 */}
        <div className="tech-section">
          <h2>Backend</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <img src="/img/Skill_Icon/NodeJS-Light.svg" alt="Node.js" className="tech-img" />
              <p>Node.js: サーバーサイドロジックに使用しました</p>
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/PHP-Light.svg" alt="Express" className="tech-img" />
              <p>Express: ルーティングに使用しました</p>
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/MySQL-Light.svg" alt="MySQL" className="tech-img" />
              <p>MySQL: データベース管理に使用しました</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skillsセクション */}
      <section className="skills-section">
        <h1>Skills</h1>

        {/* Languagesセクション */}
        <div className="skills-subsection">
          <h2>Languages</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <img src="/img/Skill_Icon/Java-Light.svg" alt="Java" className="tech-img" />
              <p>Python: データ分析やスクリプトに使用しました</p>
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/Cpp.svg" alt="Cpp" className="tech-img" />
              <p>JavaScript: フロントエンドおよびバックエンドの実装に使用しました</p>
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/C.svg" alt="C" className="tech-img" />
              <p>PHP: サーバーサイドスクリプトに使用しました</p>
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/Python-Light.svg" alt="Python" className="tech-img" />
              <p>MySQL: データベース管理に使用しました</p>
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/HTML.svg" alt="Html" className="tech-img" />
              <p>MySQL: データベース管理に使用しました</p>
            </div>
          </div>
        </div>

        {/* Toolsセクション */}
        <div className="skills-subsection">
          <h2>Tools</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <img src="/img/Skill_Icon/Github-Dark.svg" alt="Git" className="tech-img" />
              <p>Git: バージョン管理に使用しました</p>
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/git.svg" alt="Git" className="tech-img" />
              <p>Git: バージョン管理に使用しました</p>
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/Eclipse-Light.svg" alt="Eclipse" className="tech-img" />
              <p>Docker: コンテナ化技術に使用しました</p>
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/VisualStudio-Light.svg" alt="VisualStudio-Light" className="tech-img" />
              <p>Docker: コンテナ化技術に使用しました</p>
            </div>
          </div>
        </div>
      </section>

      <section class="introduction">
        <h2>Introduction</h2>
        <p>
          Welcome to my portfolio! I am an aspiring web developer with a passion for creating innovative and user-friendly applications. My journey into web development began with a curiosity for how websites work and has since grown into a deep appreciation for both front-end and back-end technologies. Through various projects, I have honed my skills in HTML, CSS, JavaScript, React, and Node.js, constantly seeking new challenges to improve my craft. When I’m not coding, I enjoy composing music and exploring creative projects that combine my technical and artistic interests.
        </p>
      </section>

    </div>
  );
}

export default About;
