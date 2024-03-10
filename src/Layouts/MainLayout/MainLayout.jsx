import { Paper, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { StyledContainer } from 'components';

import { NavBar } from './components';

const MainLayout = ({ children }) => {
  return (
    <StyledContainer>
      <NavBar />
      <Paper>{children}</Paper>
    </StyledContainer>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.element,
};
