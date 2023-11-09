import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Body2 from './Components/Body'
import Footer from './Components/footer';
import { gsap } from 'gsap';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Contact from './Components/Contact';
import Cursor from './Components/Cursor';
import About from './Components/About';




const App =()=> {
  useEffect(() => {
    const card = document.querySelector('.App');
    gsap.fromTo(card, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5 });
  }, []);

 

  return (  
   <>
     <div className="App">
     <Cursor />
     <Header />
      <Outlet/>
      <Footer />
    </div>
    </>
  );
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/',
        element :<Body2/>
      },
      {
        path :'/contact',
        element :<Contact/>
      },
      {
        path :"/About",
        element : <About/>
  
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
