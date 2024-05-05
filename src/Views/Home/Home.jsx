import { Box, Typography, colors } from '@mui/material';

import { MainLayout } from 'Layouts';

import { StyledPaper, Login, Register } from './components';

const Home = () => {
  return (
    <MainLayout>
      <StyledPaper>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Box bgcolor={colors.yellow[400]} borderRadius={2} padding={2}>
            <Typography variant="h3" fontWeight={700}>
              O aplicativo que vai transformar sua saúde!
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            mt={5}
            bgcolor={colors.yellow[400]}
            borderRadius={2}
            justifyContent="center"
            alignItems="center"
            padding={2}
            width="50%"
          >
            <Typography variant="h4">Faça o login ou cadastre-se </Typography>
            <Box display="flex" flexDirection="row" gap={5} mt={2}>
              <Login />
              <Register />
            </Box>
          </Box>
        </Box>
      </StyledPaper>
    </MainLayout>
  );
};

export default Home;
