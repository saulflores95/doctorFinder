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
export const LandingLayout = ({content}) => (
  <StyleRoot>
    <div>
      <main>
          {content}
      </main>
    </div>
  </StyleRoot>
)

module.exports = Radium(LandingLayout);
