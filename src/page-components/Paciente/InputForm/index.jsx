import React from 'react';
import { Formik } from 'formik';
import getInitialState from './getInitialState';
import getValidationSchema from './getValidationSchema';
import { FormikLabelInput } from '../../../components/LabelInput';
import { Flex, Box } from '@rebass/grid';
import { InfoButton } from '../../../components/Button';
import { withFirebase } from '../../../components/FirebaseContext';

const InputForm = props => {
  const { firebase } = props;
  console.log(firebase.database);
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });
  const collection = db.collection('pacientes');

  return (
    <Formik
      initialValues={getInitialState()}
      validationSchema={getValidationSchema()}
      onSubmit={async (values, actions) => {
        try {
          console.log('Enviando');
          collection
            .add(values)
            .then(() => console.log('success'))
            .catch(() => console.log(':('));
          const docRef = await collection.add(values);
          console.log('Enviado');
          console.log(docRef);
          console.log(`Identificador: ${docRef.id}`);
        } catch (exception) {
          console.log('Error');
          console.log(exception);
        } finally {
          console.log('Finally');
        }
        actions.setSubmitting(false);
      }}
      render={props => (
        <form onSubmit={props.handleSubmit}>
          <FormikLabelInput text={'Nombre completo'} name={'name'} />
          <FormikLabelInput text={'Correo electrónico'} name={'email'} />
          <FormikLabelInput text={'Dirección'} name={'address'} />
          <FormikLabelInput text={'Ocupación'} name={'occupation'} />
          <FormikLabelInput text={'Fecha de nacimiento'} name={'birthdate'} />
          <FormikLabelInput
            text={'Número telefónico'}
            name={'cellphoneNumber'}
          />
          <FormikLabelInput text={'Recomendado por'} name={'recommendedBy'} />
          <Flex justifyContent="flex-end">
            <Box width={[1 / 4, 1 / 6, 1 / 8]}>
              <InfoButton type="submit">Guardar</InfoButton>
            </Box>
          </Flex>
        </form>
      )}
    />
  );
};

export default withFirebase(InputForm);
