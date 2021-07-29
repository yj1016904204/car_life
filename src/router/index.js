import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import Detail from '../views/Detail';
const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/detail/:SerialID" component={Detail} />
      <Redirect to="/home" from="/" />
    </Switch>
  )
}

export default Routes