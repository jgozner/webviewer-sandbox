import React, { useRef, useEffect, useState } from 'react';
import WebViewer from '@pdftron/webviewer';

const WebViewerModal = () => {
    const viewer = useRef(null);

  // if using a class, equivalent of componentDidMount 
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '/files/PDFTRON_about.pdf',
      },
      viewer.current,
    ).then((instance) => {
    });

    return () => {
        viewer.current = null;
    }
  }, []);

  return (
     <div className="webviewer" ref={viewer} style={{width: "100%", height: "100%"}}></div>
  );
};

export default WebViewerModal;
