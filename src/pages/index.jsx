import React, { useState, useEffect } from 'react';
import PatientView from '../page-components/Home';
import usePatientCollection from '../utils/usePatientCollection';

const mockData = {
  patientList: [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jenny doe',
    },
    {
      id: 3,
      name: 'Cool man',
    },
  ],
};

const Paciente = props => {
  const [patientList, setPatientList] = useState([]);
  const collection = usePatientCollection();

  async function getPatientData() {
    const data = await collection.get();
    const patientData = [];
    data.forEach(d => {
      patientData.push({
        id: d.id,
        name: d.data().name,
      });
    });
    setPatientList(patientData);
  }

  useEffect(() => {
    getPatientData();
  }, []);

  const deletePatient = patientId => {
    collection.doc(patientId).delete();
    getPatientData();
  };

  return (
    <PatientView
      {...props}
      patientList={patientList}
      deletePatient={deletePatient}
    />
  );
};

export default Paciente;
