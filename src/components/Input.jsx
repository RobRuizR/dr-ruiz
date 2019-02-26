import styled from 'styled-components';
import { Field } from 'formik';

export const withInputStyle = component => styled(component)`
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  padding: 4px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.silver};
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  font-size: 1em;
  resize: none;
`;

const Input = withInputStyle('input');

export default Input;

export const FormikInput = withInputStyle(Field);

export const FormikSelectInput = styled(withInputStyle(Field)).attrs({
  component: 'select',
})``;
