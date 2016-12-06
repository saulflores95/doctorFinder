import React from 'react';
import ButtomNavigation from './ButtomNavigation.jsx';
import UpperNavigation from './UpperNavigation.jsx';
import {Container} from 'react-grid-system';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
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
