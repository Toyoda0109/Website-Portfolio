import React from 'react';

function PLUGIN_POST() {
  return (
    <section id="PLUGIN_POST">
      <h4 className="main-heading">POST</h4>
      <div style={{ textAlign: 'center', margin: '1em 0' }}>
        <hr style={{ border: 'none', borderTop: '2px dashed #ccc' }} />
        <p>ここでは、 機能アップデート・リリース情報、障害や不具合に関する情報などの告知を行います。</p>
        <p>感想や、要望があればContactフォームもしくはXでお知らせしてくれると嬉しいですぞ〜^</p>
        <hr style={{ border: 'none', borderTop: '2px dashed #ccc' }} />
      </div>
      <pre style={{ fontFamily: 'monospace', fontSize: '1.3em', lineHeight: '1.4' }}>
        {`    ∩∩
   （´･ω･）< `}
        <span style={{ fontSize: '0.7em' }}>{' Xで言えばいいのに...'}</span>
        {`
   ＿| ⊃／(＿＿
 ／ └(＿＿＿／
 ￣￣￣￣￣￣￣`}
      </pre>
    </section>
    
  );
}

export default PLUGIN_POST;
