import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom'
import HomePage from './Home/home';
import HomepageLayout from './Layouts&components/homeLayout';
import NewArticle from './NewArticlePage/newArticle';
import Login from './Login/login';
import Signin from './Login/signin';
import {CreativeDraft} from './NewArticlePage/creativeDraft';
import AppLayout from './Layouts&components/appLayout';
import { NormalDraft } from './NewArticlePage/blankDraft';
import { AuthProvider, useAuth } from './contextApis/authContext';
import Verify from './Login/verify';
import ProtectedRole from './ProtectedRoute/rolesProtected';
import ProtectedAuth from './ProtectedRoute/authProtected';
import About from './ExtraPages/about';
import { BlogProvider } from './contextApis/blogContext';
import Profile from './ProfilePage/profile';
import Blog from './NewArticlePage/blog';
import { BlogDisplay } from './NewArticlePage/blogDisplay';
import Global404 from './ErrorPages/error404Page';
import { ProfileProvider } from './contextApis/profileContext';
import AccountManagement from './UtilityPages/accountManagement';
import Terms from './UtilityPages/terms';
import Privacy from './UtilityPages/privacy';
import Settings from './UtilityPages/settings';
import UtilityLayout from './Layouts&components/utilityLayout';
import Help from './UtilityPages/help';
import ProfilePublic from './ProfilePage/profilePublic';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Approutes = () =>{
  const router = useMemo(()=>{
    return createBrowserRouter([
      {
        path: '/',
        element: 
        <ProtectedAuth>
          <HomepageLayout />
        </ProtectedAuth>,
        children:[
          {
            path: '',
            element: <HomePage />
          },
          {
            path: 'about',
            element: <About />
          },
          {
            path: '*',
            element: <Global404 />
          },
        ]
      },
      {
        path: '/',
        element:
        <ProtectedRole>
          <AppLayout />
        </ProtectedRole>,
        children:[
          {
            path: 'new',
            element: <NewArticle/>
          },
          {
            path: 'creative-blog',
            element: <CreativeDraft />
          },
          {
            path: 'normal-blog',
            element: <NormalDraft />
          },
          {
            path: 'blogs',
            element: <Blog />
          },
          {
            path: 'blogs/:slug',
            element: <BlogDisplay />,
          },
          {
            path: '*',
            element: <Global404 />
          },
          {
            path: 'profile',
            element: <Profile />
          },
          {
            path: 'profile/:profileSlug',
            element: <ProfilePublic />
          },
          {
            path: 'about',
            element: <About />
          },
          {
            path: '/',
            element: <UtilityLayout />,
            children:[
              {
                path: 'help',
                element: <Help />
              },
              {
                path: 'settings',
                element: <Settings />
              },
              {
                path: 'privacy',
                element: <Privacy />
              },
              {
                path: 'terms',
                element: <Terms />
              },
              {
                path: 'account-management',
                element: <AccountManagement />
              }
            ]
          }
        ]
      },
      {
        path: '/',
        element: 
        <ProtectedAuth>
          <Outlet />
        </ProtectedAuth>,
        children: [
          {
            path: 'signin',
            element: <Signin />
          },
          {
            path: 'login',
            element: <Login />
          },
          {
            path: 'verify',
            element: 
              //<ProtectedRole>
                <Verify/>
              //</ProtectedRole>
          }
        ]
      }
    ])
  })
  return <RouterProvider router={router}/>
}

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BlogProvider>
        <ProfileProvider>
          <Approutes />
        </ProfileProvider>
      </BlogProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
