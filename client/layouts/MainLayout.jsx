import React from 'react';
import ButtomNavigation from './ButtomNavigation.jsx';
import UpperNavigation from './UpperNavigation.jsx';
import {Container} from 'react-grid-system';

const styles = {
  content:{
    paddingTop:50
  }
};
export const MainLayout = ({content}) => (
  <div style={styles.content}>
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
