import { Route, Switch } from 'react-router';
import GlobalStyle from 'styles/GlobalStyle';
import Home from './Home';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      
      <GlobalStyle />
    </>
  );
}

export default App;
