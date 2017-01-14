import React from 'react';
import ButtomNavigation from './ButtomNavigation.jsx';
import UpperNavigation from './UpperNavigation.jsx';
import {Container} from 'react-grid-system';
import {StyleRoot} from 'radium';
import Radium from 'radium';

const styles = {
  content:{
    paddingTop:50,
  },

  mainContent: {
    marginTop: '100px'
  }
};
export const MainLayout = ({content}) => (
  <StyleRoot>
    <div style={styles.content}>
      <header>
          <UpperNavigation />
      </header>
      <main className="main-content">
          {content}
      </main>
      <footer >
        <ButtomNavigation/>
      </footer>
    </div>

  </StyleRoot>
)

module.exports = Radium(MainLayout);
