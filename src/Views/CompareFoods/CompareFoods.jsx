import { useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material';
import { StyledPaperUniversal, CustomDialog } from 'components';

import { MainLayout } from 'Layouts';
import { FoodTable } from './components';

const CompareFoods = () => {
  const [openOptionsFood, setOpenOptionsFood] = useState(false);
  const mockFood = [
    {
      id: 1,
      name: 'Feijão',
    },
    {
      id: 2,
      name: 'Arroz',
    },
  ];

  const nutricionalInformation = [
    'protein',
    'kcal',
    'kj',
    'lipids',
    'cholesterol',
    'carbohydrate',
    'dietary_fiber',
    'sodium',
    'magnesium',
    'potassium',
    'manganese',
    'phosphor',
    'vitamin_c',
    'iron',
    'calcium',
    'copper',
    'zinc',
    'ashes',
    'retinol',
    'thiamine',
    'riboflavin',
    'pyridoxine',
    'niacin',
    're',
    'rae',
    'humidity',
  ];

  return (
    <MainLayout>
      <StyledPaperUniversal>
        <Box display="flex" gap={2} flexDirection="column">
          <Box display="flex" gap={2}>
            <Box display="flex" flexDirection="column" width="50%" gap={1}>
              <Typography variant="h4" fontWeight={700} color="secondary">
                Buscar por alimentos
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
                sx={{ width: '100%' }}
              />
              <Button variant="contained">Buscar</Button>
            </Box>
          </Box>
          <FoodTable />
          <Box display="flex" alignItems="center" width="50%">
            <Button
              variant="contained"
              onClick={() => setOpenOptionsFood(true)}
            >
              Comparar alimentos
            </Button>
          </Box>
        </Box>
        <CustomDialog
          isOpen={openOptionsFood}
          handleClose={() => setOpenOptionsFood(false)}
          actionButtonName="Enviar"
          closeButtonName="Fechar"
          actionButton={() => {}}
        >
          <Typography color="secondary" variant="body1" fontWeight={500}>
            Você quer comparar por qual informação nutricional?
          </Typography>
          <FormGroup>
            {nutricionalInformation.map((information, index) => (
              <FormControlLabel
                control={<Checkbox />}
                key={index}
                label={information}
              />
            ))}
          </FormGroup>
        </CustomDialog>
      </StyledPaperUniversal>
    </MainLayout>
  );
};

export default CompareFoods;
