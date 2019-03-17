import React from 'react';
import { Router } from '@reach/router';

import Layout from '../components/Layout';
import PatientDetail from '../page-components/Detail';

const Detalle = () => (
  <Layout>
    <Router>
      <PatientDetail path="/detalle/:patientId" />
    </Router>
  </Layout>
);

export default Detalle;
