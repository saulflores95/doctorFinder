import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <h2>RutaTj.IO</h2>
      <nav>
        <a href="/">Ruta</a>
        <a href="/about">Nosotros</a>
        <AccountsUI />
      </nav>
    </header>
    <main>
      {content}
    </main>
  </div>
)
