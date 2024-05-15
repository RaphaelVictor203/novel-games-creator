import { useMediaQuery } from 'react-responsive';

function SetResponsiveValues() {
    window.isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1724px)'});
    window.isSmallScreen = useMediaQuery({query: '(min-width: 1500px)'});
    window.isSmallerScreen = useMediaQuery({query: '(min-width: 600px)'});
    window.isSmallerScreen_1 = useMediaQuery({query: '(min-width: 414px)'});
    window.isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
    window.isTabletOrMobile = useMediaQuery({ query: '(max-width: 414px)' });
    window.isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    window.isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
}
