
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingBanner from './components/landingBanner/landingBanner';
import Content from './components/content/content';
import Routepost from './components/createpost/routepost';


// import Content from './components/content/content';

function App() {
  return (
 <>
  <BrowserRouter>
 
  <Routes>
    <Route  path='/' element={<LandingBanner/>}/>
    <Route path='/content' element={<Content/>}/>
    <Route path='/createPost' element={<Routepost/>}/>
  </Routes>
  </BrowserRouter>
 </>
  );
}

export default App;
