import { Route, Switch } from 'react-router';

import { Header } from './components';
import { Login, MainPage, Register, Story } from './pages';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route exact path='/auth/login'>
          <Login />
        </Route>
        <Route exact path='/auth/register'>
          <Register />
        </Route>
        <Route exact path='/story/:storyId'>
          <Story />
        </Route>
      </Switch>
    </>
  );
}

export default App;
