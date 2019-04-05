import React, { useState, useEffect } from 'react';
import { Flex, Box } from '@rebass/grid';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import usePatientCollection from '../../utils/usePatientCollection';
import { getInitialPersonalDataState } from '../../components/PatientInputForm/PersonalData/helpers';

function PatientDataVisualization(props) {
  const {
    patientData: {
      name,
      occupation,
      recommendedBy,
      email,
      birthdate,
      cellphoneNumber,
      address,
    } = getInitialPersonalDataState(),
  } = props;

  return (
    <Flex>
      <Box py={2} width={1}>
        <Flex flexDirection="column">
          <Box py={2}>
            <strong>Nombre Completo</strong>
            <Box pt={2}>{name}</Box>
          </Box>
          <Box py={2}>
            <strong>Correo</strong>
            <Box pt={2}>{email}</Box>
          </Box>
          <Box py={2}>
            <strong>Dirección</strong>
            <Box pt={2}>{address}</Box>
          </Box>
          <Box py={2}>
            <strong>Ocupación</strong>
            <Box pt={2}>{occupation}</Box>
          </Box>
          <Box py={2}>
            <strong>Teléfono celular</strong>
            <Box pt={2}>{cellphoneNumber}</Box>
          </Box>
          <Box py={2}>
            <strong>Fecha de nacimiento</strong>
            <Box pt={2}>{birthdate}</Box>
          </Box>
          <Box py={2}>
            <strong>Recomendado por</strong>
            <Box pt={2}>{recommendedBy || '---'}</Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

function PatientDetail(props) {
  const { patientId } = props;
  const collection = usePatientCollection();
  const [patientData, setPatientData] = useState('');

  async function getPatientData() {
    const doc = await collection.doc(patientId).get();

    if (!doc.exists) {
      console.log("Doc doesn't exist");
      return;
    }
    console.log(doc.data());

    setPatientData(doc.data());
  }

  useEffect(() => {
    getPatientData();
  }, []);

  return (
    <>
      <Helmet title={`Paciente ${patientData && patientData.name}`} />
      <Flex mb={3}>
        <Box as={Link} to="/" width={[1 / 2, 1 / 4]}>
          {'<'} Regresar
        </Box>
      </Flex>
      {patientData && <PatientDataVisualization patientData={patientData} />}
    </>
  );
}

export default PatientDetail;
