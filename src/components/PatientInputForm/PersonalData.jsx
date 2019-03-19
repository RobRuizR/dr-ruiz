import React from 'react';
import { Box } from '@rebass/grid';

import { FormikLabelInput } from '../LabelInput';

const PersonalData = () => (
  <Box pt={3}>
    <FormikLabelInput text="Nombre completo" name="name" />
    <FormikLabelInput text="Correo electrónico" name="email" />
    <FormikLabelInput text="Dirección" name="address" />
    <FormikLabelInput text="Ocupación" name="occupation" />
    <FormikLabelInput text="Fecha de nacimiento" name="birthdate" />
    <FormikLabelInput text="Número telefónico" name="cellphoneNumber" />
    <FormikLabelInput text="Recomendado por" name="recommendedBy" />
  </Box>
);

export default PersonalData;
