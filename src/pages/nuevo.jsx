import React from 'react';
import { Link, navigate } from 'gatsby';
import { Box, Flex } from '@rebass/grid';
import Layout from '../components/Layout';
import InputForm from '../components/PatientInputForm';
import getInitialState from '../page-components/NewPatient/getInitialState';
import usePatientCollection from '../utils/usePatientCollection';
import useFirebaseTimestamp from '../utils/useFirebaseTimestamp';

const PacienteNuevo = () => {
  const collection = usePatientCollection();
  const timestamp = useFirebaseTimestamp();

  const handleNewPatientSubmit = async (values, actions) => {
    const patient = {
      ...values,
      creationDate: timestamp,
      lowercaseName: values.name.toLowerCase(),
    };
    try {
      const ref = await collection.add(patient);
      alert('Paciente dado de alta');
      navigate(`/detalle/${ref.id}`);
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
