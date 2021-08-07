import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Product from 'Pages/Product';
import RecentList from 'Pages/RecentList';

function Routes() {
  return(
    <Router>
      <Switch>
        <Route path='/product' component={Product} />
        <Route path='/recentlist' component={RecentList} />
      </Switch>
    </Router>
  )
}

export default Routes;