import React, { useState } from 'react';
import PatientView from '../page-components/Home';

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
  const [patientList, setPatientList] = useState(mockData.patientList);

  const deletePatient = patientId => {
    const newPatientList = patientList.filter(
      patient => patient.id !== patientId
    );

    setPatientList(newPatientList);
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
