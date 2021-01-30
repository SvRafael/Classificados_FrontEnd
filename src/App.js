import './App.css';
import pages from './pages/index'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" component={pages.Listagem} exact />
        <Route path="/classificados" component={pages.Listagem} exact />
        <Route path="/novo" component={pages.Novo} exact />
      </Switch>
    </Router>
  );
}

export default App;
