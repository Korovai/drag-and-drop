// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrApp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  playWindow: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '650px',
    margin: '0 30px'
  },
  wrBodyGame: {
    border: '1px solid #fff',
    margin: '5px 0',
    background: '#fff'
  },
  playingField: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5px'
  }
}));

export default useStyles;
