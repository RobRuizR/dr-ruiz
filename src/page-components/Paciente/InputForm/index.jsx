import React from 'react';
import { Formik } from 'formik';
import getInitialState from './getInitialState';
import getValidationSchema from './getValidationSchema';
import { FormikLabelInput } from '../../../components/LabelInput';
import { Flex, Box } from '@rebass/grid';
import { InfoButton } from '../../../components/Button';

const InputForm = () => {
  return (
    <Formik
      initialValues={getInitialState()}
      validationSchema={getValidationSchema()}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
      render={(props) => (
        <form onSubmit={props.handleSubmit}>
          <FormikLabelInput
            text={"Nombre completo"}
            name={"name"}
          />
          <FormikLabelInput
            text={"Correo electrónico"}
            name={"email"}
          />
          <FormikLabelInput
            text={"Dirección"}
            name={"address"}
          />
          <FormikLabelInput
            text={"Ocupación"}
            name={"occupation"}
          />
          <FormikLabelInput
            text={"Fecha de nacimiento"}
            name={"birthdate"}
          />
          <FormikLabelInput
            text={"Número telefónico"}
            name={"cellphoneNumber"}
          />
          <FormikLabelInput
            text={"Recomendado por"}
            name={"recommendedBy"}
          />
          <Flex justifyContent="flex-end">
            <Box width={[1/4, 1/6, 1/8]}>
              <InfoButton type="submit">Guardar</InfoButton>
            </Box>
          </Flex>
        </form>
      )} />
  );
}

export default InputForm;
