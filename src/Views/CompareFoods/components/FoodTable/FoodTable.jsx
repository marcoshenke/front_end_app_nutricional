import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { theme } from 'Styles';

const FoodTable = () => {
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
    <TableContainer
      component={Paper}
      style={{ backgroundColor: theme.palette.tertiary.main }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Alimentos</TableCell>
            <TableCell align="right">Kcal</TableCell>
            <TableCell align="right">Kj</TableCell>
            <TableCell align="right">Proteína (g)</TableCell>
            <TableCell align="right">Carboidratos (g)</TableCell>
            <TableCell align="right">Lipídeos (g)</TableCell>
            <TableCell align="right">Colesterol( mg)</TableCell>
            <TableCell align="right">Sódio (mg)</TableCell>
            <TableCell align="right">Magnésio (mg)</TableCell>
            <TableCell align="right">Potássio (mg)</TableCell>
            <TableCell align="right">Manganês (mg)</TableCell>
            <TableCell align="right">Fósforo (mg)</TableCell>
            <TableCell align="right">Vitamina C (mg)</TableCell>
            <TableCell align="right">Cálcio (mg)</TableCell>
            <TableCell align="right">Ferro (mg)</TableCell>
            <TableCell align="right">Cobre (mg)</TableCell>
            <TableCell align="right">Zinco (mg)</TableCell>
            <TableCell align="right">Retinol (µg)</TableCell>
            <TableCell align="right">Tiamina (mg)</TableCell>
            <TableCell align="right">Riboflavina (mg)</TableCell>
            <TableCell align="right">Niacina (mg)</TableCell>
            <TableCell align="right">Piridoxina (mg)</TableCell>
            <TableCell align="right">RE (µg)</TableCell>
            <TableCell align="right">RAE (µg)</TableCell>
            <TableCell align="right">Umidade (%)</TableCell>
            <TableCell align="right">Cinzas (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockFood.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.kcal}</TableCell>
              <TableCell align="right">{row.kj}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.carbohydrate}</TableCell>
              <TableCell align="right">{row.lipids}</TableCell>
              <TableCell align="right">{row.cholesterol}</TableCell>
              <TableCell align="right">{row.sodium}</TableCell>
              <TableCell align="right">{row.magnesium}</TableCell>
              <TableCell align="right">{row.potassium}</TableCell>
              <TableCell align="right">{row.manganese}</TableCell>
              <TableCell align="right">{row.phosphor}</TableCell>
              <TableCell align="right">{row.vitamin_c}</TableCell>
              <TableCell align="right">{row.calcium}</TableCell>
              <TableCell align="right">{row.iron}</TableCell>
              <TableCell align="right">{row.copper}</TableCell>
              <TableCell align="right">{row.zinc}</TableCell>
              <TableCell align="right">{row.retinol}</TableCell>
              <TableCell align="right">{row.thiamine}</TableCell>
              <TableCell align="right">{row.riboflavin}</TableCell>
              <TableCell align="right">{row.niacin}</TableCell>
              <TableCell align="right">{row.pyridoxine}</TableCell>
              <TableCell align="right">{row.re}</TableCell>
              <TableCell align="right">{row.rae}</TableCell>
              <TableCell align="right">{row.humidity}</TableCell>
              <TableCell align="right">{row.ashes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FoodTable;
