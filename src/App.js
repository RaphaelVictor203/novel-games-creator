import MediaQuery from 'react-responsive';
import { useMediaQuery } from 'react-responsive';

import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import HomePage from './components/HomePage';

function App() {
  
  window.isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1724px)'});
  window.isSmallScreen = useMediaQuery({query: '(min-width: 1500px)'});
  window.isSmallerScreen = useMediaQuery({query: '(min-width: 600px)'});
  window.isSmallerScreen_1 = useMediaQuery({query: '(min-width: 414px)'});
  window.isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  window.isTabletOrMobile = useMediaQuery({ query: '(max-width: 414px)' });
  window.isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  window.isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
