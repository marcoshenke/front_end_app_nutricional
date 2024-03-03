import { Paper, Container } from '@mui/material';
import PropTypes from 'prop-types';

import { NavBar } from './components';

const MainLayout = ({ children }) => {
  return (
    <Container>
      <NavBar />
      <Paper>{children}</Paper>
    </Container>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.element,
};
