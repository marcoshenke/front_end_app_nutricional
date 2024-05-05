import * as yup from 'yup';

export const LoginSchema = yup.object({
  email: yup
    .string()
    .email()
    .matches(/@[^.]*\./)
    .required(),
  password: yup
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      'A senha deve conter pelo menos uma letra maiúscula e um símbolo',
    )
    .required('Por favor, insira sua senha'),
});
