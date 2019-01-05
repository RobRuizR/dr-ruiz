import React from 'react';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';

const ColoredBox = styled(Box)`
  background: ${({ theme }) => theme.color.teal};
`;

const Header = ({ siteTitle }) => (
  <Flex as="nav">
    <ColoredBox width={1} p={3} />
  </Flex>
);

export default Header;
