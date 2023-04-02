import React, { useEffect, useId } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
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
  const html5QrcodeRef = useRef<any>();
  useEffect(() => {
    if (!html5QrcodeRef.current) {
      const html5QrCode = new Html5Qrcode(id);
      const config = { fps: 1, qrbox: { width: 250, height: 250 } };
      html5QrCode.start(
        { facingMode: 'environment' },
        config,
        onSuccess,
        onFailure
      );
      html5QrcodeRef.current = html5QrCode;
    }
  }, []);
  return <div id={id} {...props}></div>;
};

export default QRCodeScanner;
