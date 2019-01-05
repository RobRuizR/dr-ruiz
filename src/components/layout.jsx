import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Flex, Box } from '@rebass/grid';
import { ThemeProvider } from 'styled-components';

import Header from './header';
import './layout.css';

const theme = {
  color: {
    navy: '#001f3f',
    blue: '#0074d9',
    aqua: '#7fdbff',
    teal: '#39cccc',
    olive: '#3d9970',
    green: '#2ecc40',
    lime: '#01ff70',
    yellow: '#ffdc00',
    orange: '#ff851b',
    red: '#ff4136',
    maroon: '#85144b',
    fuchsia: '#f012be',
    purple: '#b10dc9',
    black: '#111111',
    gray: '#aaaaaa',
    silver: '#dddddd',
  },
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Helmet
        titleTemplate={`Doctor`}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Header siteTitle={`Doctor`} />
      <Flex as="main" pt={4}>
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
