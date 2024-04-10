import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

export const Login = ({ control }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      gap={1}
    >
      <Typography variant="h5">Fazer Login</Typography>
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
      <Button variant="contained" color="secondary">
        login
      </Button>
    </Box>
  );
};

Login.propTypes = {
  control: PropTypes.object,
};
