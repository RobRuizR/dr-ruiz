import React from 'react';
import { Formik } from 'formik';
import { Flex, Box } from '@rebass/grid';
import PropTypes from 'prop-types';
import { getPersonalDataValidationSchema } from '../../components/PatientInputForm/PersonalData/helpers';
import { InfoButton } from '../../components/Button';
import PersonalData from '../../components/PatientInputForm/PersonalData';

const NewPatient = props => {
  const { initialState, onSubmit } = props;

  return (
    <Formik
      initialValues={initialState}
      validationSchema={getPersonalDataValidationSchema()}
      onSubmit={onSubmit}
      render={renderProps => (
        <form onSubmit={renderProps.handleSubmit}>
          <PersonalData />
          <Flex justifyContent="flex-end" py={[2, 2, 3]}>
            <Box width={[1 / 4, 1 / 6, 1 / 8]}>
              <InfoButton type="submit">Guardar</InfoButton>
            </Box>
          </Flex>
        </form>
      )}
    />
  );
};

NewPatient.propTypes = {
  initialState: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default NewPatient;
