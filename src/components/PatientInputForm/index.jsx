/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Formik } from 'formik';
import { Flex, Box } from '@rebass/grid';
import PropTypes from 'prop-types';
import getValidationSchema from './getValidationSchema';
import { InfoButton } from '../Button';
import PersonalData from './PersonalData';
import OtherQuestions from './OtherQuestions';
import MedicalRecords from './MedicalRecords';
import CurrentDiagnosis from './CurrentDiagnosis';

const PatientInputForm = props => {
  const { initialState, onSubmit } = props;

  return (
    <Formik
      initialValues={initialState}
      validationSchema={getValidationSchema()}
      onSubmit={onSubmit}
      render={renderProps => (
        <form onSubmit={renderProps.handleSubmit}>
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

PatientInputForm.propTypes = {
  initialState: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PatientInputForm;
