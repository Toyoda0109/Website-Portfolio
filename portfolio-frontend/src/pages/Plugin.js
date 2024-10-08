import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import BulletinBoard from './BulletinBoard';
import Login from './Login';
import './Plugin.css';

function Plugin() {
  const pluginContents = [
    {
      label: 'プラグインの概要',
      link: '#overview',
      children: [
        { label: '対応環境', link: '#supported-environments' },
        { label: '対応コード', link: '#supported-chords' },
      ],
    },
    {
      label: 'プラグインの使用方法',
      link: '#usage',
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
    { label: 'プラグインのダウンロード', link: '#download' },
  ];

  const [activeSection, setActiveSection] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    const mainSections = document.querySelectorAll('#overview, #usage, #CHORD_LOGIC, #download');
    const chordLogicHeading = document.querySelector('#CHORD_LOGIC h4');  // #CHORD_LOGICの見出しをターゲットに
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
  
          if (entry.isIntersecting && sectionId !== 'CHORD_LOGIC') {
            // 通常のセクション
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.2 } // 通常のセクションの閾値
    );
  
    const chordLogicObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('CHORD_LOGIC');
          }
        });
      },
      { threshold: 0 }
    );
  
    mainSections.forEach(section => observer.observe(section));
    if (chordLogicHeading) {
      chordLogicObserver.observe(chordLogicHeading);  // 見出しの監視
    }
  
    return () => {
      mainSections.forEach(section => observer.unobserve(section));
      if (chordLogicHeading) {
        chordLogicObserver.unobserve(chordLogicHeading);  // 見出しの監視を解除
      }
    };
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // ログイン状態をtrueに設定
  };
  

  return (
    <div className="plugin-page">
      <Sidebar contents={pluginContents} activeSection={activeSection} />

      <div className="content" id="top">
        <h4 className="plugin-title">【CHORDIN】和音コードをMIDI信号から検知するVSTプラグイン</h4>
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

        <section id="overview">
          <h4 className="main-heading">プラグインの概要</h4>
          <p>
            CHORDINは、MIDI信号からリアルタイムに和音コードを自動的に検知・表示するプラグインです。音楽制作や演奏の際に、押さえた和音がどのようなコードであるかを即座に知ることができ、音楽理論の理解や即興演奏に役立ちます。
          </p>
          <p>また、転回系に対応しているため、同じコードでも異なるベース音を検出できます。</p>

          <section id="supported-environments">
            <h5 className="sub-heading">対応環境</h5>
            <ul>
              <li><strong>対応OS</strong>: Windows 10以降</li>
              <li><strong>対応DAW</strong>: Cubaseでのみ動作確認を行いましたが(他のDAWは持っていないため確認できていません)、VST3形式に対応したソフトなら利用できると考えています。</li>
              <li><strong>アーキテクチャ</strong>: 64ビットシステム</li>
              <li><strong>必要なもの</strong>: MIDIキーボード</li>
            </ul>
          </section>

          <section id="supported-chords">
            <h5 className="sub-heading">対応コード</h5>
            <p>CHORDINは、以下のコードを検出できます。</p>
            <table className="striped centered responsive-table">
              <thead>
                <tr>
                  <th>コードの種類</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>メジャーコード</td><td>マイナーコード</td></tr>
                <tr><td>7thコード</td><td>9thコード</td></tr>
                <tr><td>11thコード</td><td>メジャー7thコード</td></tr>
                <tr><td>マイナー7thコード</td><td>Dimコード</td></tr>
                <tr><td>Sus4コード</td><td>7th Sus4コード</td></tr>
                <tr><td>Augコード</td><td>add9コード</td></tr>
                <tr><td>7-5(セブン・フラット・ファイブ)</td><td></td></tr>
              </tbody>
            </table>
          </section>
        </section>

        <section id="usage">
          <h4 className="main-heading">プラグインの使用方法</h4>

          <section id="supported-introduction">
            <h5 className="sub-heading">導入</h5>
            <p>
              DAWを開いて、インストゥルメントトラックとMIDIトラックを立ち上げます(以下では、Cubase12を使用して説明します)。
            </p>
            <img src="/img/Plugin_use.jpeg" alt="Plugin_use" className="plugin-sub-image" />
            <p>
              上記では、インストゥルメントとしてKontaktのピアノ音源を使用していますが、基本的には何を使っても問題ありません。インストゥルメントトラックに、オーディオinsertからCHORDINをインサートしてください。
            </p>
            <img src="/img/Plugin_MIDI_Output.png" alt="Plugin_MIDI_Output" className="plugin-sub-image" />
            <p>
              上記の画像を参考に、MIDIトラックに移動し、インスペクターよりMIDIインプットが「ALL MIDI INPUTS」になっているか確認してください。MIDIアウトプットは、Kontakt7(音源名)-Event inputから、Kontakt7 01(音源名):Ins. 1. CHORDIN-MIDI inputに変更してください。
            </p>
            <img src="/img/Plugin_using_demo.png" alt="Plugin_using_demo" className="plugin-sub-image" />
            <p>MIDIキーボードで鍵盤を鳴らして、プラグインが作動すればOKです。</p>
          </section>
          
          <section id="supported-function">
            <h5 className="sub-heading">機能</h5>
            <img src="/img/Plugin_Function.png" alt="Plugin_Function" className="plugin-function-image" />
            <p>
              Select Scaleでは、Major ScalesまたはMinor Scalesを選ぶ項目がありますが、これには意味があり、コード検出ロジックのセクションで詳しく説明しています。MIDI NOTEでは、リアルタイムでMIDIキーボードの押されている鍵盤名を表示します。INTERVALでは、2つの音の間隔を表す度数を表示します。
            </p>
            <table className="striped centered responsive-table">
              <thead>
                <tr>
                  <th>度数</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>短二度</td><td>MINOR 2ND</td></tr>
                <tr><td>長二度</td><td>MAJOR 2ND</td></tr>
                <tr><td>短三度</td><td>MINOR 3RD</td></tr>
                <tr><td>長三度</td><td>MAJOR 3RD</td></tr>
                <tr><td>完全四度</td><td>PERFECT 4TH</td></tr>
                <tr><td>増四度</td><td>TRITONE</td></tr>
                <tr><td>完全五度</td><td>PERFECT 5TH</td></tr>
                <tr><td>短六度</td><td>MINOR 6TH</td></tr>
                <tr><td>長六度</td><td>MAJOR 6TH</td></tr>
                <tr><td>短七度</td><td>MINOR 7TH</td></tr>
                <tr><td>長七度</td><td>MAJOR 7TH</td></tr>
                <tr><td>オクターブ</td><td>OCTAVE</td></tr>
              </tbody>
            </table>
            <p>
              MIDIボタンやINTEボタンを押すと、MIDI NOTE、INTERVALの表示を非表示にすることができます。右下の歯車ボタンは、プラグインのウィンドウサイズを300×300～600×600まで変更可能です。
            </p>
          </section>
        </section>

        <section id="CHORD_LOGIC">
          <h4 className="main-heading">コード検出ロジック</h4>
          <h5 className="sub-heading">コード検出ロジックについて</h5>
          <p>
            CHORDINのプログラムでは、以下の様な処理の流れでコードを検出します。
          </p>
          <ul>
            <li>1. MIDI信号を受信し、現在押されているノートを保存します。負荷対策のため、ノートは同時に最大10個までとします(それ以上は検出しない)。</li>
            <li>2. 現在押されているノートと、和音コードが定義されている関数と比較し、コード定義に一致するノートセットが見つかった場合、そのコード名が表示されます。</li>
            <li>3. 同時に、現在押されているノートの中で最も低いノートを取得します。</li>
            <li>4. 現在押されているノートがコードである場合、コード名に先ほど取得した最低音を含めることで転回形の表記を行います。</li>
          </ul>

          <p>プログラム上では、以下のようにコードとそのコードの構成音が定義されています。</p>
          <img src="/img/Chord_Define.png" alt="Chord_Define" className="plugin-function-image" />
          <p>
            ただし、コードを構成音で定義するロジックでは、以下のような問題点がありますのでご了承ください。
          </p>
          <ul>
            <li>構成音が同じコードの場合①: Augコードは[Faug, C#aug, Aaug]の構成音が全てF, A, C#であるため、「Faugと表示したかったが、Aaugの転回形として表示されてしまった」という状況が発生します。Augコードに関してはSelect Scalesを利用して、キーに関連のあるコードを優先的に表示するようにしていますが、あまり使用する場面は多くありません。</li>
            <li>構成音が同じコードの場合②: C4, E4, G4, B2のような場合、Cmajor/Bと考える方が多いですが、CM7として表示されることもあります。</li>
            <li>メロディと一緒には使用できない: 構成音によって判定しているため、判定プログラムがその音を和音の一部と認識してしまい、正確な和音が出ないことがあります。</li>
          </ul>
        </section>

        <section id="download">
          <h4 className="main-heading">プラグインのダウンロード</h4>
          <p>以下のリンクから、プラグインをダウンロードできます。</p>
          <a href="/CHORDIN.zip" download>プラグインをダウンロード</a>
          <p>ダウンロード後、ファイルを解凍し、C:\Program Files\Common Files\VST3のフォルダに配置してください。</p>
          <img src="/img/File_Routing.png" alt="File_Routing.png" className="plugin-sub-image" />
        </section>
        <BulletinBoard isAdmin={isLoggedIn} /> 
  
        {!isLoggedIn && (
          <Login onLoginSuccess={handleLoginSuccess} /> // 管理者ログインフォームを表示
        )}
      </div>
    </div>
  );
}

export default Plugin;
