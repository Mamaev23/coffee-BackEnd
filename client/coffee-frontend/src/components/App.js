import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { store } from '../redux/configureStore'
import Footer from './footer/Footer';
import Header from './headers/Header'
import PhotoCarousel from './headers/PhotoCarousel';
import CoffeePageByCategory from './page/CoffeePageByCategory';
import SignUp from './Sign/SignUp';
import Main from './main/Main';


function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Header/>
          <Switch>
            <Route exact path="/">
              <PhotoCarousel/>
              <Main />
              {/*<Footer/>*/}
            </Route>
            <Route path="/category/:id">
              <CoffeePageByCategory/>
            </Route>
            <Route path="/authorization">
              <SignUp/>
            </Route>
            <Route path='/coffee/:id}'>
            </Route>
          </Switch>
      </Provider>
    </div>
  );
}

export default App;
