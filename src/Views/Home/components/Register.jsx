import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpSchema } from './SignUpSchema';

export const Register = () => {
  const { register, error, handleSubmit } = useForm({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
    >
      <Typography variant="h5">Cadastrar-se</Typography>
      <form>
        <TextField
          placeholder="E-mail"
          fullWidth
          {...register('email')}
          sx={{ marginY: '5px' }}
        />

        <TextField
          placeholder="Senha"
          {...register('email')}
          fullWidth
          sx={{ marginY: '5px' }}
        />

        <TextField
          placeholder="Nome de Usuário"
          {...register('username')}
          fullWidth
        />

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          fullWidth
          sx={{ marginY: '5px' }}
        >
          cadastrar
        </Button>
      </form>
    </Box>
  );
};

Register.propTypes = {
  control: PropTypes.object,
};
