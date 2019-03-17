/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Box } from '@rebass/grid';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input, { FormikInput, FormikSelectInput } from './Input';

const ErrorField = styled(ErrorMessage)`
  color: ${({ theme }) => theme.color.red};
`;

export const GenericLabelInput = ({
  text,
  InputComponent,
  name,
  formikField,
  ...rest
}) => (
  <Box as="label" pb={2} css={{ display: 'block' }}>
    <Box pb={1}>{text}</Box>
    <InputComponent name={name} {...rest} />
    {formikField && <ErrorField name={name} component={'div'} />}
  </Box>
);

GenericLabelInput.propTypes = {
  formikField: PropTypes.bool,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

GenericLabelInput.defaultProps = {
  formikField: false,
  children: null,
};

export default props => <GenericLabelInput InputComponent={Input} {...props} />;

export const FormikLabelInput = props => (
  <GenericLabelInput InputComponent={FormikInput} formikField {...props} />
);

export const FormikSelectLabelInput = props => (
  <GenericLabelInput
    InputComponent={FormikSelectInput}
    formikField
    {...props}
  />
);

export const FormikArrayInput = props => (
  <GenericLabelInput InputComponent={1} formikField {...props} />
);
