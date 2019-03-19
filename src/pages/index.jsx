import React, { useState, useEffect } from 'react';
import PatientView from '../page-components/Home';
import usePatientCollection from '../utils/usePatientCollection';

const maxRows = 10;

const Paciente = props => {
  const [patientList, setPatientList] = useState([]);
  const collection = usePatientCollection();

  function updatePatientListFromData(data) {
    const patientData = [];
    data.forEach(d => {
      patientData.push({
        id: d.id,
        name: d.data().name,
      });
    });
    setPatientList(patientData);
  }

  async function getPatientData() {
    const data = await collection
      .orderBy('lowercaseName')
      .limit(maxRows)
      .get();
    updatePatientListFromData(data);
  }

  async function filterByName(event) {
    const { value: name } = event.target;
    const data = await collection
      .orderBy('lowercaseName')
      .startAt(name.toLowerCase())
      .limit(maxRows)
      .get();
    updatePatientListFromData(data);
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
      search={filterByName}
    />
  );
};

export default Paciente;
