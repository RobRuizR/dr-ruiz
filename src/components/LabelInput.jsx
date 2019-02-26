import React from 'react';
import { Box } from '@rebass/grid';
import { ErrorMessage, FieldArray } from 'formik';
import Input, { FormikInput, FormikSelectInput } from './Input';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorField = styled(ErrorMessage)`
  color: ${({ theme }) => theme.color.red};
`;

export const GenericLabelInput = ({
  text,
  InputComponent,
  name,
  formikField,
  ...rest
}) => {
  return (
    <Box as="label" pb={2} css={{ display: 'block' }}>
      <Box pb={1}>{text}</Box>
      <InputComponent name={name} {...rest} />
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
  children: null,
};

export default props => <GenericLabelInput InputComponent={Input} {...props} />;

export const FormikLabelInput = props => (
  <GenericLabelInput
    InputComponent={FormikInput}
    formikField={true}
    {...props}
  />
);

export const FormikSelectLabelInput = props => (
  <GenericLabelInput
    InputComponent={FormikSelectInput}
    formikField={true}
    {...props}
  />
);

export const FormikArrayInput = props => (
  <GenericLabelInput InputComponent={1} formikField={true} {...props} />
);

export const ArrayInput = props => {
  <GenericLabelInput
    InputComponent={() => (
      <FieldArray
        name={props.name}
        render={arrayHelpers => (
          <div>
            {values && values.length > 0 ? (
              <React.Fragment>
                {values.map((_, index) => (
                  <div key={index}>
                    <Input name={`${name}.${index}`} />
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                >
                  +
                </button>
              </React.Fragment>
            ) : (
              <button type="button" onClick={() => arrayHelpers.push('')}>
                {/* show this when user has removed all friends from the list */}
                Add a friend
              </button>
            )}
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        )}
      />
    )}
    formikField={true}
    {...props}
  />;
};
