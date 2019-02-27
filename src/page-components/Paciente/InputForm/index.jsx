import React from 'react';
import { Formik } from 'formik';
import getInitialState, { getTestState } from './getInitialState';
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
      initialValues={getTestState()}
      validationSchema={getValidationSchema()}
      onSubmit={async (values, actions) => {
        try {
          console.log('Enviando');
          console.log(values);
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
          <OtherQuestions />

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
      <h2>Datos personales</h2>
    </Box>
    <FormikLabelInput text={'Nombre completo'} name={'name'} />
    <FormikLabelInput text={'Correo electrónico'} name={'email'} />
    <FormikLabelInput text={'Dirección'} name={'address'} />
    <FormikLabelInput text={'Ocupación'} name={'occupation'} />
    <FormikLabelInput text={'Fecha de nacimiento'} name={'birthdate'} />
    <FormikLabelInput text={'Número telefónico'} name={'cellphoneNumber'} />
    <FormikLabelInput text={'Recomendado por'} name={'recommendedBy'} />
  </>
);

const OtherQuestions = () => {
  const prefix = 'others';
  return (
    <>
      <Box py={3}>
        <h2>Otros</h2>
      </Box>
      <FormikLabelInput text="Motivación" name={`${prefix}.motivation`} />
      <FormikLabelInput text="Plan" name={`${prefix}.plan`} />
      <FormikLabelInput
        text="Notas"
        component="textarea"
        name={`${prefix}.notes`}
      />
    </>
  );
};

const MedicalRecords = () => (
  <>
    <Box py={3}>
      <h2>Registros Médicos</h2>
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

  const SpecialStudies = () => {
    const fieldPrefix = `${prefix}.specialStudies`;
    return (
      <>
        <Box py={2}>
          <h2>Estudios especiales</h2>
        </Box>
        <LeftRightEyeNumeric
          text={'Cálculo de lente intraocular'}
          name={`specialStudies.inEyeGlassCalculus`}
        />
        <FormikLabelInput
          text={'Campo visual'}
          name={`${fieldPrefix}.visualField`}
        />
        <FormikSelectLabelInput text={'Eco'} name={`${fieldPrefix}.eco`}>
          <option value={false}>no</option>
          <option value={true}>sí</option>
        </FormikSelectLabelInput>
        <FormikSelectLabelInput
          text={'Fluorangiografía'}
          name={`${fieldPrefix}.fluorangiography`}
        >
          <option value={false}>no</option>
          <option value={true}>sí</option>
        </FormikSelectLabelInput>
        <FormikSelectLabelInput
          text={'Topografía'}
          name={`${fieldPrefix}.topography`}
        >
          <option value={false}>no</option>
          <option value={true}>sí</option>
        </FormikSelectLabelInput>
        <LeftRightEyeNumeric
          text={'Paquimetría'}
          name={`specialStudies.paquimetry`}
        />
      </>
    );
  };

  return (
    <>
      <Box py={3}>
        <h3>Diagnóstico Actual</h3>
      </Box>
      <FormikLabelInput text={'PEEA'} name={`${prefix}.peea`} />
      <Box py={3}>
        <h4>Exploración Física</h4>
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
      <FormikLabelInput
        text={'Distancia interpupilar'}
        type="number"
        name={`${prefix}.interPupilarDistance`}
      />
      <LeftRightEyeNumeric
        text={'Prescripción subjetiva'}
        name={'prescription.subjective'}
      />
      <LeftRightEyeNumeric
        text={'Prescripción objetiva'}
        name={'prescription.objective'}
      />
      <SpecialStudies />
      <FormikLabelInput text={'Diagnóstico'} name={`${prefix}.diagnostic`} />
      <FormikLabelInput text={'Tratamiento'} name={`${prefix}.treatment`} />
    </>
  );
};

export default withFirebase(InputForm);
