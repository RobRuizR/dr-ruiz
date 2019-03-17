import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Box, Flex } from '@rebass/grid';
import Layout from '../components/Layout';
import InputForm from '../components/PatientInputForm';
import FirebaseContext from '../components/FirebaseContext';

const PacienteNuevo = () => {
  const firebase = useContext(FirebaseContext);
  const db = firebase.firestore();
  const collection = db.collection('pacientes');

  const handleNewPatientSubmit = async (values, actions) => {
    try {
      console.log('Enviando');
      console.log(values);
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
  };

  return (
    <Layout>
      <Flex mb={3}>
        <Box as={Link} to="/" width={[1 / 2, 1 / 4]}>
          {'<'} Regresar
        </Box>
      </Flex>
      <InputForm onSubmit={handleNewPatientSubmit} />
    </Layout>
  );
};

export default PacienteNuevo;
