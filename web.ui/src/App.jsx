import React, { useContext } from 'react';
import './App.css';
import Routes from "./routes";
import { Context } from "./context/index";

import LoadingOverlay from 'react-loading-overlay';

export default function App() {
  const user = useContext(Context);
  return (
    <LoadingOverlay
      active={user.isLoading}
      spinner
      text='Cargando...'
      >
      <div className="App">
        <Routes />
      </div>
    </LoadingOverlay>
  );
};