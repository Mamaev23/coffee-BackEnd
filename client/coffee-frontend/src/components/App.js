import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { store } from '../redux/configureStore'
import Footer from './footer/Footer';
import Header from './headers/Header'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <BrowserRouter>
          <Switch>
            <Route path="/">

              <Footer/>


            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
