import React, { useRef, useEffect, useState } from 'react';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';

const WebViewerModal = () => {
    const viewer = useRef(null);
    const wvInstance = useRef();

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: "/files/PDFTRON_about.pdf"
      },
      viewer.current,
    ).then((instance) => {
      if(instance){
        wvInstance.current = instance 
      }
    });

    return () => {
      wvInstance.current.Core.documentViewer.dispose();
      viewer.current = null;
      wvInstance.current = null;
    }
  }, []);

  return (
     <div className="webviewer" ref={viewer} style={{width: "100%", height: "100%"}}></div>
  );
};

export default WebViewerModal;
