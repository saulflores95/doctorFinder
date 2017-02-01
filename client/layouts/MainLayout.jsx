import React from 'react';
import ButtomNavigation from './ButtomNavigation.jsx';
import UpperNavigation from './UpperNavigation.jsx';
import {Container} from 'react-grid-system';
import {StyleRoot} from 'radium';
import Radium from 'radium';

const styles = {
  mainContent: {
    marginTop: '100px'
  }
};
export const MainLayout = ({content}) => (
  <StyleRoot>
    <div>
      <header>
          <UpperNavigation />
      </header>
      <main className="main-content">
          {content}
      </main>
      <footer className="footer">
        <ButtomNavigation/>
      </footer>
    </div>
  </StyleRoot>
)

module.exports = Radium(MainLayout);
