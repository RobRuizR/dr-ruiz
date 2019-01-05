import React from 'react';
import { Box, Flex } from '@rebass/grid';
import Layout from '../../components/layout';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';
import Input from '../../components/Input';

const CenterBox = styled(Box)`
  text-align: center;
`;

const Paciente = () => {
  return (
    <Layout>
      <Box width={1}>
        <Input placeholder={'Buscar'} />
      </Box>
      <Flex mt={3}>
        <Box>
          <GatsbyLink to={"/paciente/nuevo"}>Crear nuevo paciente</GatsbyLink>
        </Box>
      </Flex>
      <Flex pt={3} mt={2}>
        <Box width={3 / 4}>
          <GatsbyLink to={'/paciente/detalle'}>Paciente</GatsbyLink>
        </Box>
        <CenterBox width={1 / 8}>Edit</CenterBox>
        <CenterBox width={1 / 8}>Delete</CenterBox>
      </Flex>
    </Layout>
  );
};

export default Paciente;
