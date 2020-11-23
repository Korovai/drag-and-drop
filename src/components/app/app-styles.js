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
  }
}));

export default useStyles;
