import React from 'react';

const Iframe = () => {

  const iframeStyle = {
    border: '0',
    width: '100%', // Set the width to 100% to make it responsive
    height: '800px', // Set an initial height or adjust as needed
  };

  return (
    <div>
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <iframe
          src="https://lookerstudio.google.com/embed/reporting/41367d34-0a96-4064-aba7-094cd100511a/page/p_fxmq45rg9c"
          frameBorder="0"
          style={iframeStyle}
          allowFullScreen
          title="Embedded Looker Report"
          width="100%"
          height="100%"
          position="absolute"
          top="0"
          left="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Iframe;