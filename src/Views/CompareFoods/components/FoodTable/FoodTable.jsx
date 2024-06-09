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
      name: 'Arroz Branco Cozido',
      protein: 2.7,
      kcal: 130,
      kj: 544,
      lipids: 0.3,
      cholesterol: 0,
      carbohydrate: 28.2,
      dietary_fiber: 0.4,
      sodium: 0.001,
      magnesium: 0.008,
      potassium: 0.035,
      manganese: 0.5,
      phosphor: 0.037,
      vitamin_c: 0,
      iron: 0.2,
      calcium: 0.01,
      copper: 0.06,
      zinc: 0.4,
      ashes: 0.5,
      retinol: 0,
      thiamine: 0.02,
      riboflavin: 0.01,
      pyridoxine: 0.05,
      niacin: 1.6,
      re: 0,
      rae: 0,
      humidity: 68.5,
    },
    {
      id: 2,
      name: 'Batata Cozida Sem Casca',
      protein: 1.9,
      kcal: 86,
      kj: 360,
      lipids: 0.1,
      cholesterol: 0,
      carbohydrate: 20.1,
      dietary_fiber: 1.8,
      sodium: 0.006,
      magnesium: 0.02,
      potassium: 0.379,
      manganese: 0.15,
      phosphor: 0.044,
      vitamin_c: 19.7,
      iron: 0.31,
      calcium: 0.008,
      copper: 0.12,
      zinc: 0.27,
      ashes: 0.9,
      retinol: 0,
      thiamine: 0.106,
      riboflavin: 0.019,
      pyridoxine: 0.298,
      niacin: 1.097,
      re: 0,
      rae: 0,
      humidity: 75.0,
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
