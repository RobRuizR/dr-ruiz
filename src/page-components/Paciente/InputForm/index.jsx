import React from 'react';
import { Formik } from 'formik';
import getInitialState from './getInitialState';
import getValidationSchema from './getValidationSchema';
import {
  FormikLabelInput,
  FormikSelectLabelInput,
} from '../../../components/LabelInput';
import { Flex, Box } from '@rebass/grid';
import { InfoButton } from '../../../components/Button';
import { withFirebase } from '../../../components/FirebaseContext';

const InputForm = props => {
  const { firebase } = props;
  const db = firebase.firestore();
  const collection = db.collection('pacientes');

  return (
    <Formik
      initialValues={getInitialState()}
      validationSchema={getValidationSchema()}
      onSubmit={async (values, actions) => {
        try {
          console.log('Enviando');
          collection
            .add(values)
            .then(() => console.log('success'))
            .catch(() => console.log(':('));
          const docRef = await collection.add(values);
          console.log('Enviado');
          console.log(docRef);
          console.log(`Identificador: ${docRef.id}`);
        } catch (exception) {
          console.log('Error');
          console.log(exception);
        } finally {
          console.log('Finally');
        }
        actions.setSubmitting(false);
      }}
      render={props => (
        <form onSubmit={props.handleSubmit}>
          <PersonalData />
          <MedicalRecords />
          <CurrentDiagnosis />

          <Flex justifyContent="flex-end" py={3}>
            <Box width={[1 / 4, 1 / 6, 1 / 8]}>
              <InfoButton type="submit">Guardar</InfoButton>
            </Box>
          </Flex>
        </form>
      )}
    />
  );
};

const PersonalData = () => (
  <>
    <Box py={3}>
      <h3>Datos personales</h3>
    </Box>
    <FormikLabelInput text={'Nombre completo'} name={'name'} />
    <FormikLabelInput text={'Correo electrónico'} name={'email'} />
    <FormikLabelInput text={'Dirección'} name={'address'} />
    <FormikLabelInput text={'Ocupación'} name={'occupation'} />
    <FormikLabelInput text={'Fecha de nacimiento'} name={'birthdate'} />
    <FormikLabelInput
      text={'Número telefónico'}
      name={'cellphoneNumber'}
    />
    <FormikLabelInput text={'Recomendado por'} name={'recommendedBy'} />
  </>
)

const MedicalRecords = () => (
  <>
    <Box py={3}>
      <h3>Registros Médicos</h3>
    </Box>
    <FormikSelectLabelInput
      text={'Tiene diabetes'}
      name={'medicalRecords.diabetes.hasIt'}
    >
      <option value={false}>no</option>
      <option value={true}>sí</option>
    </FormikSelectLabelInput>
    <FormikLabelInput
      text={'Fecha de diagnóstico'}
      name={'medicalRecords.diabetes.diagnosisDate'}
    />
    <FormikLabelInput
      text={'Valor de azúcar'}
      name={'medicalRecords.diabetes.sugar.value'}
      type="number"
    />
    <FormikLabelInput
      text={'Niveles de azúcar'}
      name={'medicalRecords.diabetes.sugar.levels'}
      type="number"
    />
    <FormikLabelInput
      text={'Notas'}
      component="textarea"
      name={'medicalRecords.diabetes.notes'}
    />

    <FormikSelectLabelInput
      text={'Tiene presión alta'}
      name={'medicalRecords.highPressure.hasIt'}
    >
      <option value={false}>no</option>
      <option value={true}>sí</option>
    </FormikSelectLabelInput>
    <FormikLabelInput
      text={'Fecha de diagnóstico'}
      name={'medicalRecords.highPressure.diagnosisDate'}
    />
    <FormikLabelInput
      text={'Notas'}
      component="textarea"
      name={'medicalRecords.highPressure.notes'}
    />

    <FormikLabelInput
      text={'Alergias a medicamento'}
      component="textarea"
      name={'medicalRecords.medicineAllergies'}
    />

    <FormikSelectLabelInput
      text={'Tiene enfermedades del corazón'}
      name={'medicalRecords.heartDiseases.hasIt'}
    >
      <option value={false}>no</option>
      <option value={true}>sí</option>
    </FormikSelectLabelInput>
    <FormikLabelInput
      text={'Fecha de diagnóstico'}
      name={'medicalRecords.heartDiseases.diagnosisDate'}
    />
    <FormikLabelInput
      text={'Notas'}
      component="textarea"
      name={'medicalRecords.heartDiseases.notes'}
    />

    <FormikLabelInput
      text={'Alergias a medicamento'}
      component="textarea"
      name={'medicalRecords.medicineAllergies'}
    />

    <FormikSelectLabelInput text={'Tiene asma'} name={'medicalRecords.asthma'}>
      <option value={false}>no</option>
      <option value={true}>sí</option>
    </FormikSelectLabelInput>
    <FormikSelectLabelInput
      text={'Tiene alergias a anestesia'}
      name={'medicalRecords.anesthesia'}
    >
      <option value={false}>no</option>
      <option value={true}>sí</option>
    </FormikSelectLabelInput>
    <FormikSelectLabelInput
      text={'Tiene sangrado'}
      name={'medicalRecords.bleeding'}
    >
      <option value={false}>no</option>
      <option value={true}>sí</option>
    </FormikSelectLabelInput>
    <FormikSelectLabelInput
      text={'Tiene artritis'}
      name={'medicalRecords.arthritis'}
    >
      <option value={false}>no</option>
      <option value={true}>sí</option>
    </FormikSelectLabelInput>
    <FormikSelectLabelInput
      text={'Ha tenido cirugías de ojos previamente'}
      name={'medicalRecords.previousEyeSurgeries'}
    >
      <option value={false}>no</option>
      <option value={true}>sí</option>
    </FormikSelectLabelInput>
    <FormikSelectLabelInput
      text={'Ha usado lentes de armazón'}
      name={'medicalRecords.hasUsedGlasses'}
    >
      <option value={false}>no</option>
      <option value={true}>sí</option>
    </FormikSelectLabelInput>
    <FormikSelectLabelInput
      text={'Ha usado lentes de contacto'}
      name={'medicalRecords.hasUsedContacts'}
    >
      <option value={false}>no</option>
      <option value={true}>sí</option>
    </FormikSelectLabelInput>
    <FormikLabelInput
      text={'Notas'}
      component="textarea"
      name={'medicalRecords.notes'}
    />
  </>
);

const CurrentDiagnosis = () => {
  const prefix = 'currentDiagnosis';

  const PhysicalExplorationEye = props => {
    const { name, text, ...rest } = props;
    const fieldName = `${prefix}.${name}`;
    return (
      <Box width={[1, 1 / 2]} pb={3} {...rest}>
        <Box pb={3} pt={2}>
          <h4>{text}</h4>
        </Box>
        <FormikLabelInput
          text={'Percepción de luz'}
          name={`${fieldName}.lightPerception`}
        />
        <FormikLabelInput
          text={'Movimiento de manos'}
          name={`${fieldName}.handMovement`}
        />
        <FormikLabelInput
          text={'Conteo de dedos'}
          name={`${fieldName}.fingerCount`}
        />
        <FormikLabelInput
          text={'Agudeza visual (Cartilla de Snellen)'}
          name={`${fieldName}.eyeAcuity`}
        />
      </Box>
    );
  };

  const LeftRightEyeNumeric = props => {
    const { text, name } = props;
    return (
      <>
        <Box pb={3} pt={2}>
          <h4>{text}</h4>
        </Box>
        <Flex>
          <Box width={[1, 1 / 2]} pr={[0, 3]}>
            <FormikLabelInput
              text={'Ojo izquierdo'}
              name={`${prefix}.${name}.leftEye`}
              type="number"
            />
          </Box>
          <Box width={[1, 1 / 2]} pl={[0, 3]}>
            <FormikLabelInput
              text={'Ojo derecho'}
              name={`${prefix}.${name}.rightEye`}
              type="number"
            />
          </Box>
        </Flex>
      </>
    );
  };

  return (
    <>
      <FormikLabelInput text={'PEEA'} name={`${prefix}.peea`} />
      <Box py={3}>
        <h3>Exploración Física</h3>
      </Box>
      <Flex flexDirection={['column', 'row']}>
        <PhysicalExplorationEye
          text={'Ojo izquierdo'}
          name={`physicalExploration.leftEye`}
          pr={[0, 3]}
        />
        <PhysicalExplorationEye
          text={'Ojo derecho'}
          name={`physicalExploration.rightEye`}
          pl={[0, 3]}
        />
      </Flex>
      <FormikLabelInput
        text={'Biomicroscopía'}
        name={`${prefix}.biomichroscopia`}
      />
      <LeftRightEyeNumeric
        text={'Presión intraocular'}
        name={'inEyePressure'}
      />
    </>
  );
};

export default withFirebase(InputForm);
