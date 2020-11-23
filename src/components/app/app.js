// Base
import React from 'react';

// React
import { connect } from 'react-redux';

// Material-UI
import Box from '@material-ui/core/Box';

// Components
import HeaderGame from '../header/header-game';
import BodyGame from '../body-game/body-game';
import FooterGame from '../footer/footer-game';

// Styles
import useStyles from './app-styles';

function App(props) {
  const classes = useStyles();
  const { settings } = props;
  
  return (
    <Box className={classes.wrApp}>
      <Box className={classes.playWindow}>
        <HeaderGame />
        <BodyGame settings={settings} />
        <FooterGame />
      </Box>
    </Box>   
  );
};

const mapStateToProps = ({ settings }) => {
  return {
    settings
  };
};

export default connect(mapStateToProps, null)(App);
