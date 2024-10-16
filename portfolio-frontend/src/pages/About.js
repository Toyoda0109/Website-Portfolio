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
            <p>26卒の情報理工学部の大学生です。
              Webエンジニアを目指しており、フロントエンドとバックエンドの両面でのスキル向上を目指しています。
              大学では動的計画法や遺伝的アルゴリズムを活用した作曲支援ソフトの開発に取り組んでいます。
              作曲とプログラミングが好きで、作曲活動も行っています。
            </p>
          </div>
        </div>
      </section>

      <section className="about-website-section">
        <h1>About this website</h1>
        <p>
          このWebサイトは、作曲支援のために作成したVSTプラグインを配布する目的で制作しました。
          DAW上で多様なコードを検知できるプラグインが見つからず、作成することにしました。
          音楽活動をしているものの音楽理論に不安がある方(自分のように）の助けになれば嬉しいです。
          また、このWebサイトは自分のポートフォリオとしても兼ねています。
        </p>
        <p>
          下記には、Webサイト作成に使用した言語やフレームワークを紹介しています。
        </p>

        {/* Frontend技術 */}
        <div className="tech-section">
          <h2>Frontend</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <img src="/img/Skill_Icon/React-Light.svg" alt="React" className="tech-img" />
              <p>React: サイトのユーザーインターフェースの構築やコンポーネントの管理</p>
            </div>

            <div className="tech-item">
              <img src="/img/Skill_Icon/css.svg" alt="CSS" className="tech-img" />
              <p>CSS: Webサイト全体のデザインやレイアウト</p>
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/JavaScript.svg" alt="JavaScript" className="tech-img" />
              <p>JavaScript: ユーザーの操作に応じた動的なコンテンツの表示</p>
            </div>
          </div>
        </div>

        {/* Backend技術 */}
        <div className="tech-section">
          <h2>Backend</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <img src="/img/Skill_Icon/NodeJS-Light.svg" alt="Node.js" className="tech-img" />
              <p>Node.js: Contactページにおけるメール送信機能</p>
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/PHP-Light.svg" alt="PHP" className="tech-img" />
              <p>PHP: Postでの簡易掲示板機能</p>
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/MySQL-Light.svg" alt="MySQL" className="tech-img" />
              <p>MySQL: 掲示板のデータ管理</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skillsセクション */}
      <section className="skills-section">
        <h1>Skills</h1>
        <p>
          このセクションでは、その他使用したことのあるプログラミング言語やツールを提示しています。(実務経験は御座いません)
        </p>

        {/* Languagesセクション */}
        <div className="skills-subsection">
          <h2>Languages</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <img src="/img/Skill_Icon/Java-Light.svg" alt="Java" className="tech-img" />
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/Cpp.svg" alt="Cpp" className="tech-img" />
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/C.svg" alt="C" className="tech-img" />
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/Python-Light.svg" alt="Python" className="tech-img" />
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/HTML.svg" alt="Html" className="tech-img" />
            </div>
          </div>

          <div class="tech-descriptions">
            <li>Java: 作曲支援ソフトの開発を行う研究に使用しています</li>
            <li>C++: 和音コード検知プラグインに使用しています</li>
            <li>C, Python: 大学のカリキュラム上で学習, 基本的なアルゴリズムやデータ構造など</li>
            <li>HTML: Web開発等</li>
          </div>
        </div>

        {/* Toolsセクション */}
        <div className="skills-subsection">
          <h2>Tools</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <img src="/img/Skill_Icon/Github-Dark.svg" alt="Git" className="tech-img" />
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/git.svg" alt="Git" className="tech-img" />
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/Eclipse-Light.svg" alt="Eclipse" className="tech-img" />
            </div>
            <div className="tech-item">
              <img src="/img/Skill_Icon/VisualStudio-Light.svg" alt="VisualStudio-Light" className="tech-img" />
            </div>
          </div>
          <div class="tech-descriptions">
            <li>Github, Git: 開発におけるバージョン管理、コード管理</li>
            <li>Eclipse, Vscode: コードエディタ</li>
          </div>
        </div>
      </section>

      <section class="introduction">
        <h2>Introduction</h2>
        <p>
          

        </p>
      </section>

    </div>
  );
}

export default About;
