import React, {Suspense, lazy} from 'react';

import './App.scss';
import './assets/bootstrap/bootstrap.scss';
import './assets/slick/slick.scss';
import './assets/slick/slick-theme.scss';

const BottomNav = lazy(() => import('./components/BottomNav'));
const Navbar = lazy(() => import('./components/Navbar'));
const Container = lazy(() => import('./pages/Container'));

const App = props => {

  let bottomTab = null;
  let navbar = null;
  let urlPath = props.location.pathname;

  if(urlPath == '/register' || urlPath == '/login' || urlPath == '/verification' || urlPath =='/register/biodata'){
    navbar = (<div/>);
  }else{
    navbar = (<Navbar {...props} />)
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
    </Suspense>
  );
}

export default App;
