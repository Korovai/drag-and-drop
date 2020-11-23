// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
