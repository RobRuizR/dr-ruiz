import React, { useState, useEffect } from 'react';
import { Flex, Box } from '@rebass/grid';
import { Link } from 'gatsby';

import usePatientCollection from '../../utils/usePatientCollection';
import PatientInputForm from '../../components/PatientInputForm';

function PatientDetail(props) {
  const { patientId } = props;
  const collection = usePatientCollection();
  const [patientData, setPatientData] = useState(null);

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
      <Flex mb={3}>
        <Box as={Link} to="/" width={[1 / 2, 1 / 4]}>
          {'<'} Regresar
        </Box>
      </Flex>
      {patientData && (
        <PatientInputForm initialState={patientData} onSubmit={() => {}} />
      )}
    </>
  );
}

export default PatientDetail;
