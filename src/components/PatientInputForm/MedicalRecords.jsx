import React from 'react';
import { Box } from '@rebass/grid';

import { FormikLabelInput, FormikSelectLabelInput } from '../LabelInput';

const MedicalRecords = () => (
  <Box pt={3}>
    <FormikSelectLabelInput
      text="Tiene diabetes"
      name="medicalRecords.diabetes.hasIt"
    >
      <option value={false}>no</option>
      <option value>sí</option>
    </FormikSelectLabelInput>
    <FormikLabelInput
      text="Fecha de diagnóstico"
      name="medicalRecords.diabetes.diagnosisDate"
    />
    <FormikLabelInput
      text="Valor de azúcar"
      name="medicalRecords.diabetes.sugar.value"
      type="number"
    />
    <FormikLabelInput
      text="Niveles de azúcar"
      name="medicalRecords.diabetes.sugar.levels"
      type="number"
    />
    <FormikLabelInput
      text="Notas"
      component="textarea"
      name="medicalRecords.diabetes.notes"
    />

    <FormikSelectLabelInput
      text="Tiene presión alta"
      name="medicalRecords.highPressure.hasIt"
    >
      <option value={false}>no</option>
      <option value>sí</option>
    </FormikSelectLabelInput>
    <FormikLabelInput
      text="Fecha de diagnóstico"
      name="medicalRecords.highPressure.diagnosisDate"
    />
    <FormikLabelInput
      text="Notas"
      component="textarea"
      name="medicalRecords.highPressure.notes"
    />

    <FormikLabelInput
      text="Alergias a medicamento"
      component="textarea"
      name="medicalRecords.medicineAllergies"
    />

    <FormikSelectLabelInput
      text="Tiene enfermedades del corazón"
      name="medicalRecords.heartDiseases.hasIt"
    >
      <option value={false}>no</option>
      <option value>sí</option>
    </FormikSelectLabelInput>
    <FormikLabelInput
      text="Fecha de diagnóstico"
      name="medicalRecords.heartDiseases.diagnosisDate"
    />
    <FormikLabelInput
      text="Notas"
      component="textarea"
      name="medicalRecords.heartDiseases.notes"
    />
    <FormikSelectLabelInput text="Tiene asma" name="medicalRecords.asthma">
      <option value={false}>no</option>
      <option value>sí</option>
    </FormikSelectLabelInput>
    <FormikSelectLabelInput
      text="Tiene alergias a anestesia"
      name="medicalRecords.anesthesia"
    >
      <option value={false}>no</option>
      <option value>sí</option>
    </FormikSelectLabelInput>
    <FormikSelectLabelInput
      text="Tiene sangrado"
      name="medicalRecords.bleeding"
    >
      <option value={false}>no</option>
      <option value>sí</option>
    </FormikSelectLabelInput>
    <FormikSelectLabelInput
      text="Tiene artritis"
      name="medicalRecords.arthritis"
    >
      <option value={false}>no</option>
      <option value>sí</option>
    </FormikSelectLabelInput>
    <FormikSelectLabelInput
      text="Ha tenido cirugías de ojos previamente"
      name="medicalRecords.previousEyeSurgeries"
    >
      <option value={false}>no</option>
      <option value>sí</option>
    </FormikSelectLabelInput>
    <FormikSelectLabelInput
      text="Ha usado lentes de armazón"
      name="medicalRecords.hasUsedGlasses"
    >
      <option value={false}>no</option>
      <option value>sí</option>
    </FormikSelectLabelInput>
    <FormikSelectLabelInput
      text="Ha usado lentes de contacto"
      name="medicalRecords.hasUsedContacts"
    >
      <option value={false}>no</option>
      <option value>sí</option>
    </FormikSelectLabelInput>
    <FormikLabelInput
      text="Notas"
      component="textarea"
      name="medicalRecords.notes"
    />
  </Box>
);
export default MedicalRecords;
