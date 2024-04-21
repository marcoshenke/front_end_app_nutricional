import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { StyledPaperUniversal } from 'components';

import { MainLayout } from 'Layouts';
import { FoodTable } from './components';

const CompareFoods = () => {
  const mockFood = [
    {
      id: 1,
      name: 'Alimento 1',
      protein: 2.5,
      kcal: 128,
      kj: 537,
      lipids: 0.2,
      cholesterol: 0,
      carbohydrate: 28.1,
      dietary_fiber: 1.6,
      sodium: 0.001,
      magnesium: 0.002,
      potassium: 0.015,
      manganese: 1,
      phosphor: 1,
      vitamin_c: 1,
      iron: 1,
      calcium: 1,
      copper: 1,
      zinc: 1,
      ashes: 1,
      retinol: 1,
      thiamine: 1,
      riboflavin: 1,
      pyridoxine: 1,
      niacin: 1,
      re: 1,
      rae: 1,
      humidity: 1,
    },
    {
      id: 2,
      name: 'Alimento 2',
      protein: 4.5,
      kcal: 120,
      kj: 400,
      lipids: 0.2,
      cholesterol: 0,
      carbohydrate: 28.1,
      dietary_fiber: 1.6,
      sodium: 0.001,
      magnesium: 0.002,
      potassium: 0.015,
      manganese: 1,
      phosphor: 1,
      vitamin_c: 1,
      iron: 1,
      calcium: 1,
      copper: 1,
      zinc: 1,
      ashes: 1,
      retinol: 1,
      thiamine: 1,
      riboflavin: 1,
      pyridoxine: 1,
      niacin: 1,
      re: 1,
      rae: 1,
      humidity: 1,
    },
  ];

  return (
    <MainLayout>
      <StyledPaperUniversal>
        <Box display="flex" gap={2}>
          <Box display="flex" flexDirection="column" width="20%" gap={1}>
            <Typography variant="h5" fontWeight={500}>
              Buscar alimentos
            </Typography>
            <Autocomplete
              multiple
              fullWidth
              id="multiple-limit-tags"
              options={mockFood}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Digite os alimentos"
                  placeholder="Alimentos"
                />
              )}
              sx={{ width: '500px' }}
            />
            <Button variant="contained">Buscar</Button>
          </Box>
          <FoodTable />
        </Box>
      </StyledPaperUniversal>
    </MainLayout>
  );
};

export default CompareFoods;
