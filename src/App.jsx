import { useEffect } from 'react';
import { isAndroid, isIOS } from 'react-device-detect';
import './App.css';

function App() {
  useEffect(() => {
    if (isAndroid) {
      // Redirect to Twitter app on Google Play Store
      window.location.href = 'https://play.google.com/store/apps/details?id=com.twitter.android';
    } else if (isIOS) {
      // Redirect to Instagram app on App Store
      window.location.href = 'https://apps.apple.com/us/app/instagram/id389801252';
    }
  }, []);

  return (
    <div className="App">
      <h1>Redirecting...</h1>
    </div>
  );
}

export default App;
