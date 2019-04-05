import * as Yup from 'yup';

export function getPersonalDataValidationSchema() {
  // Datos personales
  return Yup.object().shape({
    name: Yup.string()
      .min(2, 'El nombre es requerido')
      .required('El nombre es requerido'),
    email: Yup.string()
      .required('El correo es requerido')
      .email('La dirección de correo electrónico es inválida'),
    address: Yup.string(),
    occupation: Yup.string(),
    birthdate: Yup.string(),
    cellphoneNumber: Yup.string().required('Se requiere un número de teléfono'),
    recommendedBy: Yup.string(),
  });
}

export function getInitialPersonalDataState() {
  const defaultDate = new Date('2000-01-01T12:00:00');
  const stringDefaultDate = defaultDate.toDateString();

  return {
    name: '',
    email: '',
    address: '',
    occupation: '',
    birthdate: stringDefaultDate,
    cellphoneNumber: '',
    recommendedBy: '',
  };
}

export function getPersonalDataTestState() {
  const defaultDate = new Date('2000-01-01T12:00:00');
  const stringDefaultDate = defaultDate.toDateString();

  return {
    name: 'aaaa',
    email: 'aaaa@gmail.com',
    address: 'aaaaaaa',
    occupation: 'aaaa',
    birthdate: stringDefaultDate,
    cellphoneNumber: 'aaaa',
    recommendedBy: 'aaaa',
  };
}
