import { Box, Button, TextField, Typography } from '@mui/material';
import { StyledPaperUniversal } from 'components';

import { MainLayout } from 'Layouts';

const CompareFoods = () => {
  return (
    <MainLayout>
      <StyledPaperUniversal>
        <Box display="flex" flexDirection="column" width="20%" gap={1}>
          <Typography variant="h5" fontWeight={500}>
            Escolha os alimentos
          </Typography>
          <Typography>Alimento 1</Typography>
          <TextField />
          <Typography>Alimento 2</Typography>
          <TextField />
          <Button variant="contained">Comparar</Button>
        </Box>
      </StyledPaperUniversal>
    </MainLayout>
  );
};

export default CompareFoods;
