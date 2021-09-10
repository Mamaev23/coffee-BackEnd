import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { store } from '../redux/configureStore'
import Footer from './footer/Footer';
import Header from './headers/Header'
import Category from './headers/Category';
import PhotoCarousel from './headers/PhotoCarousel';
import CoffeesPage from './page/CoffeesPage';
import Cart from './Cart/Cart';
import CityPage from './page/CityPage';



function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Header/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Category/>
              <PhotoCarousel/>
              <Cart />
              <Footer/>
            </Route>
            <Route path="/category/:id">
              <CoffeesPage/>
            </Route>
            <Route path="/changed/cities">
              <CityPage/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
