import { Paper, colors } from '@mui/material';
import { styled } from '@mui/material/styles';

import urlImgFood from 'Images/background-foods.jpg';

export const StyledPaper = styled(Paper)({
  backgroundColor: colors.yellow[200],
  height: '100vh',
  padding: '50px',
  backgroundImage: `url(${urlImgFood})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
});
