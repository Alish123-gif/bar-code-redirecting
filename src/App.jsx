import { useEffect } from 'react';
import { isAndroid, isIOS } from 'react-device-detect';
import './App.css';

function App() {
  useEffect(() => {
    if (isAndroid) {
      // Redirect to Google Play Store if Android device
      window.location.href = 'https://play.google.com/store/apps';
    } else if (isIOS) {
      // Redirect to App Store if iOS device
      window.location.href = 'https://apps.apple.com/us/genre/ios/id36';
    }
  }, []);

  return (
    <div className="App">
      <h1>Redirecting...</h1>
    </div>
  );
}

export default App;
