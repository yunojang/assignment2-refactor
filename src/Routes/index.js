import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import ROUTES_PATH from 'constant/routesPath';

// import Main from 'Pages/Main';
import Product from 'Pages/Product';
import RecentList from 'Pages/RecentList';
import RecentButton from 'Components/RecentButton';


function Routes() {
  return(
    <Router>
      <RecentButton />

      <Switch>
        {/* <Route path={ROUTES_PATH.HOME} component={Main} /> */}
        <Route path={ROUTES_PATH.PRODUCT} component={Product} />
        <Route path={ROUTES_PATH.RECENT_LIST} component={RecentList} />
      </Switch>
    </Router>
  )
}

export default Routes;