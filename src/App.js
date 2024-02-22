import logo from './logo.svg';
import {BrowserRouter as Router,Route,Routes,redirect, Navigate} from 'react-router-dom'
import MainNavigation from './shared/components/Navigation/MainNavigation';
import './App.css';
import Users from './users/pages/user'
import Places from './places/pages/place'
import UserPlaces from './places/pages/UserPlaces';
const App=()=> {
  return (
    <Router>
      <MainNavigation></MainNavigation>
      <main>      
        <Routes>
      <Route path="/" element={<Users/>}/>
      <Route path='/places/new' element={<Places/>}/>
      <Route path='/:userId/places' element={<UserPlaces/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      </main>

    </Router>
   
  );
}

export default App;
