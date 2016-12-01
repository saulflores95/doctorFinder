import React from 'react';
import AccountsUI from '../AccountsUI.jsx';
import ButtomNavigation from './ButtomNavigation.jsx';
import UpperNavigation from './UpperNavigation.jsx';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
        <AccountsUI />
        <UpperNavigation />
    </header>
    <main>
      {content}
    </main>
    <footer>
      <ButtomNavigation />
    </footer>
  </div>
)
