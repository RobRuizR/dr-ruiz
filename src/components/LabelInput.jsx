import React from 'react';
import { Flex, Box } from '@rebass/grid';
import { ErrorMessage } from 'formik';
import Input, { FormikInput } from './Input';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorField = styled(ErrorMessage)`
  color: ${({ theme }) => theme.color.red};
`;

const GenericLabelInput = ({ text, InputComponent, name, formikField }) => {
  return (
    <Box as="label" pb={2} css={{ display: 'block' }}>
      <Box pb={1}>{text}</Box>
      <InputComponent name={name} />
      {formikField && <ErrorField name={name} component={'div'} />}
    </Box>
  );
};

GenericLabelInput.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

GenericLabelInput.defaultProps = {
  formikField: false,
};

export default props => <GenericLabelInput InputComponent={Input} {...props} />;

export const FormikLabelInput = props => (
  <GenericLabelInput
    InputComponent={FormikInput}
    formikField={true}
    {...props}
  />
);
