import * as Yup from 'yup';

import validator from './validator';

export const validateSessionStore = (req, res, next) => {
  const schema = Yup.object().shape({
    username: Yup.string().required('Usuário não preenchido'),
    password: Yup.string().required('Senha não preenchida'),
  });

  return validator(req, res, next, schema);
};

export default validateSessionStore;
