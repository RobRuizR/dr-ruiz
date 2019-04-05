import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from '@rebass/grid';
import { ThemeProvider } from 'styled-components';

import Header from '../header';
import './index.css';
import theme from '../../utils/theme';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Header siteTitle="Doctor" />
      <Flex as="main" py={4}>
        <Box mx="auto" p={2} width={[1, 3 / 4, 2 / 3]}>
          {children}
        </Box>
      </Flex>
    </React.Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
