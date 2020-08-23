import React, {Suspense, lazy} from 'react';

import './App.scss';
import './assets/bootstrap/bootstrap.scss';
import './assets/slick/slick.scss';
import './assets/slick/slick-theme.scss';

const BottomNav = lazy(() => import('./components/BottomNav'));
const Container = lazy(() => import('./pages/Container.js'));

const App = props => {

  let bottomTab = null;
  let urlPath = props.location.pathname;

  if(urlPath == '/' || urlPath == '/favorite' || urlPath == '/community' || urlPath == '/profile'){
    bottomTab = (<BottomNav {...props} />)
  }else{
    bottomTab = (<div/>)
  }

  return (
    <Suspense fallback="">
      <div>
        <Container {...props} />
        <div className="d-block d-sm-none">
          {bottomTab}
        </div>
      </div>
    </Suspense>
  );
}

export default App;
