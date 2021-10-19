
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Experts from './components/Experts/Experts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import  NotFound  from './components/NotFound/NotFound';
import ServicesDetails from './components/ServiceDeatails/ServicesDetails';
import Services from './components/Services/Services';

import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';





function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
       
        <Switch>
          <Route exact path='/'>
          <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path='/home'>
          <Header></Header>
           <Home></Home>
           <Footer></Footer>
          </Route>
          <Route path='/services'>
          <Header></Header>
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route path='/serviceDetails/:serviceId'>
          <Header></Header>
            <ServicesDetails></ServicesDetails>
            <Footer></Footer>
          </Route>
          <Route path='/service'>
          <Header></Header>
            <Service></Service>
            <Footer></Footer>
          </Route>
          <Route path='/banner'>
          <Header></Header>
            <Banner></Banner>
            <Footer></Footer>
          </Route>
          <Route path='expert'>
          <Header></Header>
            <Experts></Experts>
            <Footer></Footer>
          </Route>
          <Route path='/about'>
          <Header></Header>
            <AboutUs></AboutUs>
            <Footer></Footer>
          </Route>
          <Route path='/Contact'>
          <Header></Header>
            <ContactUs></ContactUs>
            <Footer></Footer>
          </Route>
          <Route path='/login'>
          <Header></Header>
            <LogIn></LogIn>
            <Footer></Footer>
          </Route>
          <Route path='/register'>
          <Header></Header>
            <Register></Register>
            <Footer></Footer>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
