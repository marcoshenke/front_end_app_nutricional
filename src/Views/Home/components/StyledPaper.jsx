import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from 'Styles';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  height: '100vh',
}));
