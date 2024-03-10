import { MainLayout } from 'Layouts';
import { Box, Paper, Typography } from '@mui/material';
import { StyledPaper } from './components';

const Home = () => {
  return (
    <MainLayout>
      <StyledPaper>
        <Typography variant="h3">
          Seja Bem-vindo(a) ao aplicativo que vai mudar sua saúde para melhor!
        </Typography>
        <Typography variant="h3">Faça o login ou se cadastre </Typography>
        <Box>
          <Typography>Fazer Login</Typography>
        </Box>
        <Box>
          <Typography>Cadastrar</Typography>
        </Box>
      </StyledPaper>
    </MainLayout>
  );
};

export default Home;
