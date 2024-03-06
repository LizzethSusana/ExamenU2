//navegar entre componentes por medio de URL

import React, { useContext } from 'react';
import SignInPage from '../module/auth/SingInpage';
import AuthContext from '../config/context/auth-context'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AdminLayout from '../module/AdminLayout';
import UserLayout from '../module/users/UserLayout';
import ClientLayout from '../module/users/ClientLayout';
const AppRouter = () => {
  const {user}= useContext(AuthContext);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
       
        {
          // Publico 
        }
        {   
          user.signed ? (<>
            <Route path='/' element= {<AdminLayout/>}>
              <Route path='/client' element={<UserLayout/>}/>
              <Route path='/user' element={<ClientLayout/>}/>
              <Route path='/admin' element={<AdminLayout/>}/>
            </Route>
          </>
           ):  <Route path='/' element={<SignInPage />} /> }
           <Route path='*' element={<>404 NOT FOUND </>} />
      </>
    )
  );
  return <RouterProvider router={router}/>;
   (
    <div>
<SignInPage />
    </div>
  )
}

export default AppRouter