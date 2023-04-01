import React, { useEffect, useId } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import {
  QrcodeErrorCallback,
  QrcodeSuccessCallback,
} from 'html5-qrcode/esm/core';
import { useRef } from 'react';

interface QRCodeScannerProps extends React.ComponentPropsWithoutRef<'div'> {
  onSuccess: QrcodeSuccessCallback;
  onFailure: QrcodeErrorCallback | undefined;
}

const QRCodeScanner = ({
  onSuccess,
  onFailure,
  ...props
}: QRCodeScannerProps) => {
  const id = useId();
  const mountedRef = useRef<Html5QrcodeScanner>();
  useEffect(() => {
    if (!mountedRef.current) {
      const html5QrcodeScanner = new Html5QrcodeScanner(
        id,
        { fps: 10, qrbox: { width: 250, height: 250 } },
        /* verbose= */ false
      );
      html5QrcodeScanner.render(onSuccess, onFailure);
      mountedRef.current = html5QrcodeScanner;
    }
  }, []);
  return <div id={id} {...props}></div>;
};

export default QRCodeScanner;
