
import { Routes, Route } from 'react-router'
import Landingpage from '../pages/Landinpage';
import AuthForm from '../components/Authentication/Login';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import AuthLayout from '../components/Authentication/AuthLayout';
import Navigation from '../components/Authentication/Navigation';
import Home from './Main';


export default function MainRoutesFile() {
    return (
        <div>
           <Routes>
            <Route path='/' element={<AuthLayout />} >
            <Route index element={<Landingpage />}/>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} /> 
            </Route>

            <Route path='/home' element={<Home/>} />

           

           

           </Routes>
            
        </div>
    );
}