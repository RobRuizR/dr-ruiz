/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Formik } from 'formik';
import { Flex, Box } from '@rebass/grid';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getValidationSchema from './getValidationSchema';
import { InfoButton } from '../Button';
import PersonalData from './PersonalData';
import OtherQuestions from './OtherQuestions';
import MedicalRecords from './MedicalRecords';
import CurrentDiagnosis from './CurrentDiagnosis';

const CustomTab = props => {
  const { children, className, ...rest } = props;
  return (
    <Tab as="div" {...rest} className={className}>
      <Box py={3}>{children}</Box>
    </Tab>
  );
};

const StyledTab = styled(CustomTab)`
  font-weight: 600;
  flex: 1;
  cursor: pointer;
  letter-spacing: 0.7px;
  text-align: center;
  border-bottom: 0.3em solid transparent;
  box-shadow: 0 2px 0px 0 hsla(0, 0%, 0%, 0.1);
  transition: 0.1s ease-in-out all;

  &:not([data-selected]) {
    color: rgba(17, 17, 17, 0.6);
  }

  &[data-selected] {
    border-bottom-color: ${({ theme }) => theme.color.teal};
  }
`;

const PatientInputForm = props => {
  const { initialState, onSubmit } = props;

  return (
    <Formik
      initialValues={initialState}
      validationSchema={getValidationSchema()}
      onSubmit={onSubmit}
      render={renderProps => (
        <form onSubmit={renderProps.handleSubmit}>
          <Tabs>
            <Flex as={TabList} py={2}>
              <StyledTab>Información personal</StyledTab>
              <StyledTab>Registros médicos</StyledTab>
              <StyledTab>Diagnóstico inicial</StyledTab>
              <StyledTab>Otras preguntas</StyledTab>
            </Flex>

            <TabPanels>
              <TabPanel>
                <PersonalData />
              </TabPanel>
              <TabPanel>
                <MedicalRecords />
              </TabPanel>
              <TabPanel>
                <CurrentDiagnosis />
              </TabPanel>
              <TabPanel>
                <OtherQuestions />
              </TabPanel>
            </TabPanels>

            <Flex justifyContent="flex-end" py={[2, 2, 3]}>
              <Box width={[1 / 4, 1 / 6, 1 / 8]}>
                <InfoButton type="submit">Guardar</InfoButton>
              </Box>
            </Flex>
          </Tabs>
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
