import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Footer, Navbar } from './components/layout';
import Home from './components/pages/Home';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import RewardList from './components/pages/admin/rewards/RewardList';
import CreateReward from './components/pages/admin/rewards/CreateRewards/CreateReward';
import NewComponent from './components/pages/admin/products/NewComponent';
import UpdateReward from './components/pages/admin/rewards/UpdateReward';
import keycloak, { initKeycloak } from './Keycloak';
import Start from './components/pages/Start';


function App() {

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    initKeycloak()
      .then((auth) => {
        setAuthenticated(auth);
        //setLoading(false);
      })
      .catch((error) => {
        console.error("Не удалось инициализировать Keycloak", error);
        //setLoading(false);
      });
  }, []);

  const handleLogin = () => {
    keycloak.login();
  };

  return (
    <BrowserRouter>
      <Navbar authenticated={authenticated}  onLogin={handleLogin} />
      <Routes>
        <Route path="/" element={authenticated ? <Home /> : <Start/>} />
        <Route path="/admin/rewards" element={authenticated ? <RewardList /> : <Navigate to="/" />} />
        <Route path="/admin/products" element={authenticated ? <NewComponent /> : <Navigate to="/" />} />
        <Route path="/admin/rewards/create" element={authenticated ? <CreateReward /> : <Navigate to="/" />} />
        <Route path="/admin/rewards/edit/:id" element={authenticated ? <UpdateReward /> : <Navigate to="/" />} />
        <Route path="*" element= {<NotFound/>}/>
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

