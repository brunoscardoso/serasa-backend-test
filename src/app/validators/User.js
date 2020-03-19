import * as Yup from 'yup';

import validator from './validator';

export const validateUserStore = (req, res, next) => {
  const schema = Yup.object().shape({
    username: Yup.string().required('Necessário informar o usuário'),
    password: Yup.string()
      .required('Necessário informar a senha')
      .min(6),
    confirmPassword: Yup.string()
      .required('Necessário confirmar a senha')
      .min(6),
  });

  return validator(req, res, next, schema);
};

export default validateUserStore;
