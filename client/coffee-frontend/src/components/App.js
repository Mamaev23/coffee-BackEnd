import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { store } from '../redux/configureStore'
import Footer from './footer/Footer';
import Header from './headers/Header'
import Category from './headers/Category';
import PhotoCarousel from './headers/PhotoCarousel';
import CoffeesPage from './page/CoffeesPage';
<<<<<<< HEAD
=======

>>>>>>> main


function App() {
  return (
    <div className="container">
      <Provider store={store}>
        {/*<Cart />*/}
        <Header/>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Category/>
              <PhotoCarousel/>
              <Footer/>
            </Route>
            <Route path="/coffees">
              <CoffeesPage/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
