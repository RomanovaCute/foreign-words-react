import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {PreloderWrapper} from './styles'


function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress color="secondary"/>
    </Box>
  );
}

function Preloder(){
    return(
       <PreloderWrapper>
           <CircularIndeterminate></CircularIndeterminate>
       </PreloderWrapper>
    )
}


export default Preloder;