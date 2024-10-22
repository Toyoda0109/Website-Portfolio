import React from 'react';

function PLUGIN_DOWNLOAD() {
  return (
    <section id="PLUGIN_DOWNLOAD">
      <h4 className="main-heading">プラグインのダウンロード</h4>
      <p>以下のリンクから、プラグインをダウンロードできます(FREE)。</p>
      <a href="http://localhost:3003/download" className="btn waves-effect waves-light">
        <i className="material-icons left">cloud_download</i> プラグインをダウンロード
      </a>
      <p>ダウンロード後、ファイルを解凍し、C:\Program Files\Common Files\VST3のフォルダに配置してください。</p>
      <img src="/img/File_Routing.png" alt="File_Routing.png" className="plugin-sub-image" />

      <p>
        この場所にプラグインを配置すると、多くのDAW（Cubase、FL Studio etc..）が自動的にそのプラグインを検出して使えるようになります。
      </p>
    </section>
  );
}

export default PLUGIN_DOWNLOAD;
