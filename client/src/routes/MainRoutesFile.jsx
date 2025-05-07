
import { Routes, Route } from 'react-router'
import Landingpage from '../pages/Landinpage';
import AuthForm from '../components/Authentication/Login';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import AuthLayout from '../components/Authentication/AuthLayout';
import Navigation from '../components/Authentication/Navigation';
import Home from './Main';
import AboutUs from '../components/components/About'; 
import ContactUs from '../components/components/ContactUs';
import Features from '../components/components/Features';
import Testimonials from '../components/components/Testimonials';

export default function MainRoutesFile() {
    return (
        <div>
           <Routes>
            <Route path='/' element={<AuthLayout />} >
            <Route index element={<Landingpage />}/>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} /> 
            <Route path='/home' element={<Home/>} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/features" element={<Features />} />
            <Route path="/testimonials" element={<Testimonials />} />
            </Route>
           </Routes>
            
        </div>
    );
}