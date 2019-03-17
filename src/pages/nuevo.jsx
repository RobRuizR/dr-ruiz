import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex } from '@rebass/grid';
import Layout from '../components/Layout';
import InputForm from '../components/PatientInputForm';
import getInitialState from '../page-components/NewPatient/getInitialState';
import usePatientCollection from '../utils/usePatientCollection';

const PacienteNuevo = () => {
  const collection = usePatientCollection();

  const handleNewPatientSubmit = async (values, actions) => {
    try {
      await collection.add(values);
      alert('Paciente dado de alta');
    } catch (exception) {
      alert('Error al dar de alta al paciente');
      console.log(exception);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Layout>
      <Flex mb={3}>
        <Box as={Link} to="/" width={[1 / 2, 1 / 4]}>
          {'<'} Regresar
        </Box>
      </Flex>
      <InputForm
        onSubmit={handleNewPatientSubmit}
        initialState={getInitialState()}
      />
    </Layout>
  );
};

export default PacienteNuevo;
