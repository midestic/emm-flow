import {
createBrowserRouter,
createRoutesFromElements,
Route,
RouterProvider

} from 'react-router-dom'



import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import SectionHead from './sections/SectionHead';


const router = createBrowserRouter(
  createRoutesFromElements(

<Route path='/' element={ <RootLayout/> } >

<Route index element={ <Home/> }/>



</Route>

  )
)



function App() {
  return (
    <div className="App container">
     

      <RouterProvider router = { router }/>
     

    </div>
    
  );
}

export default App;
