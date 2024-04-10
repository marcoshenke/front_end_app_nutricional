import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

export const Register = ({ control }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      gap={1}
    >
      <Typography variant="h5">Cadastrar-se</Typography>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            placeholder="E-mail"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            fullWidth
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            placeholder="Senha"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            fullWidth
          />
        )}
        name="password"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            placeholder="Nome de Usuário"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            fullWidth
          />
        )}
        name="username"
      />
      <Button variant="contained" color="secondary">
        cadastrar
      </Button>
    </Box>
  );
};

Register.propTypes = {
  control: PropTypes.object,
};
