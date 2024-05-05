import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@mui/material';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from './LoginSchema';

export const Login = () => {
  const { control, error, handleSubmit } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(error);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
    >
      <Typography variant="h5">Fazer Login</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              placeholder="E-mail"
              {...field}
              fullWidth
              sx={{ marginY: '5px' }}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              placeholder="E-mail"
              {...field}
              fullWidth
              sx={{ marginY: '5px' }}
            />
          )}
        />

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          fullWidth
          sx={{ marginY: '5px' }}
        >
          login
        </Button>
      </form>
    </Box>
  );
};

Login.propTypes = {
  control: PropTypes.object,
};
