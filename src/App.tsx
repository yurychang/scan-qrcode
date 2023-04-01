import './App.css';
import QRCodeScanner from './qrcode-scanner/qrcode-scanner';
import {
  QrcodeErrorCallback,
  QrcodeSuccessCallback,
} from 'html5-qrcode/esm/core';

const onScanSuccess: QrcodeSuccessCallback = (decodedText, decodedResult) => {
  // handle the scanned code as you like, for example:
  console.log(`Code matched = ${decodedText}`, decodedResult);
};

const onScanFailure: QrcodeErrorCallback = (
  errorMessage: string,
  error: any
) => {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${errorMessage}`);
};

function App() {
  return (
    <div>
      <QRCodeScanner
        style={{ maxWidth: '600px' }}
        onSuccess={onScanSuccess}
        onFailure={onScanFailure}
      ></QRCodeScanner>
    </div>
  );
}

export default App;
