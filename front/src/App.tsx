import { Redirect, Route, Switch } from 'react-router';

import { Header } from './components';
import { Login, MainPage, Register, Story } from './pages';
import { useTypedSelector } from './redux/typeHooks/useTypedSelector';

function App() {
  const { isAuth } = useTypedSelector((state) => state.user);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route
          exact
          path='/auth/register'
          render={() => (isAuth ? <Redirect to='/' /> : <Register />)}
        />
        <Route exact path='/auth/login' render={() => (isAuth ? <Redirect to='/' /> : <Login />)} />
        <Route exact path='/story/:storyId'>
          <Story />
        </Route>
      </Switch>
    </>
  );
}

export default App;
