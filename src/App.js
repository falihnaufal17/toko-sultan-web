import React, {Suspense, lazy} from 'react';

import './App.scss';
import './assets/bootstrap/bootstrap.scss';
import './assets/slick/slick.scss';
import './assets/slick/slick-theme.scss';

const BottomNav = lazy(() => import('./components/BottomNav'));
const Navbar = lazy(() => import('./components/Navbar'));
const Container = lazy(() => import('./pages/Container'));
const Footer = lazy(() => import('./components/Footer'));

const App = props => {

  let bottomTab = null;
  let navbar = null;
  let footer = null;
  let urlPath = props.location.pathname;

  if(urlPath == '/register' || urlPath == '/login' || urlPath == '/verification' || urlPath =='/register/biodata' || urlPath =='/register/choose-community' || urlPath == '/open-store'){
    navbar = (<div/>);
    footer = (<Footer {...props} />)
  }else{
    navbar = (<Navbar {...props} />)
    footer = (<div/>);
  }

  if(urlPath == '/' || urlPath == '/favorite' || urlPath == '/community' || urlPath == '/profile'){
    bottomTab = (<BottomNav {...props} />)
  }else{
    bottomTab = (<div/>)
  }

  return (
    <Suspense fallback="">
      {navbar}
      <Container {...props} />
      <div className="d-block d-sm-none">
        {bottomTab}
      </div>
      {footer}
    </Suspense>
  );
}

export default App;
