import styled from 'styled-components';

export const withButtonStyle = Component => styled(Component)`
  border-radius: 4px;
  outline: none;
  border: 2px solid var(--border-color);
  color: var(--font-color);
  background-color: var(--bg-color); 
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  transition: 0.2s ease-in-out all;

  &:active, :hover, :focus {
    border: 2px solid var(--border-color);
    color: var(--bg-color);
    background-color: var(--font-color);
  }
`;

const Button = withButtonStyle('button');

export const InfoButton = styled(Button)`
  --bg-color: ${({theme}) => theme.color.blue};
  --border-color: ${({theme}) => theme.color.blue};
  --font-color: white;
`;
