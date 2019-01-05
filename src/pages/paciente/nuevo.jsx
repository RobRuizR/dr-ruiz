import React from 'react';
import Layout from '../../components/layout';
import InputForm from '../../page-components/Paciente/InputForm';
import { Box, Flex } from '@rebass/grid';
import GatsbyLink from 'gatsby-link';

const PacienteNuevo = () => {
  return (
    <Layout>
      <Flex mb={3}>
        <Box as={GatsbyLink} to="/paciente" width={[1 / 2, 1 / 4]}>
          {'<'} Regresar
        </Box>
      </Flex>
      <InputForm />
    </Layout>
  );
};

export default PacienteNuevo;
