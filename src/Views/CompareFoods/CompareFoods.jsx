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
      name: 'Arroz Branco Cozido',
    },
    {
      id: 2,
      name: 'Batata Cozida Sem Casca',
    },
  ];

  const nutricionalInformations = [
    { nutrionalInfo: 'protein', label: 'proteína' },
    { nutrionalInfo: 'kcal', label: 'kcal' },
    { nutrionalInfo: 'kj', label: 'kj' },
    { nutrionalInfo: 'lipids', label: 'lipídios' },
    { nutrionalInfo: 'cholesterol', label: 'colesterol' },
    { nutrionalInfo: 'carbohydrate', label: 'carboidrato' },
    { nutrionalInfo: 'dietary_fiber', label: 'fibra dietética' },
    { nutrionalInfo: 'sodium', label: 'sódio' },
    { nutrionalInfo: 'magnesium', label: 'magnésio' },
    { nutrionalInfo: 'potassium', label: 'potássio' },
    { nutrionalInfo: 'manganese', label: 'manganês' },
    { nutrionalInfo: 'phosphor', label: 'fósforo' },
    { nutrionalInfo: 'vitamin_c', label: 'vitamina C' },
    { nutrionalInfo: 'iron', label: 'ferro' },
    { nutrionalInfo: 'calcium', label: 'cálcio' },
    { nutrionalInfo: 'copper', label: 'cobre' },
    { nutrionalInfo: 'zinc', label: 'zinco' },
    { nutrionalInfo: 'thiamine', label: 'tiamina' },
    { nutrionalInfo: 'riboflavin', label: 'riboflavina' },
    { nutrionalInfo: 'retinol', label: 'retinol' },
    { nutrionalInfo: 'pyridoxine', label: 'piridoxina' },
    { nutrionalInfo: 're', label: 'RE' },
    { nutrionalInfo: 'rae', label: 'RAE' },
    { nutrionalInfo: 'humidity', label: 'umidade' },
    { nutrionalInfo: 'niacin', label: 'niacina' },
    { nutrionalInfo: 'ashes', label: 'cinzas' },
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
          title="Você quer comparar por qual informação nutricional?"
        >
          <FormGroup>
            {nutricionalInformations.map((information, index) => (
              <FormControlLabel
                control={<Checkbox />}
                key={index}
                label={information.label}
              />
            ))}
          </FormGroup>
        </CustomDialog>
      </StyledPaperUniversal>
    </MainLayout>
  );
};

export default CompareFoods;
