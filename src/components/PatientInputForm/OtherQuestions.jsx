import React from 'react';
import { Box } from '@rebass/grid';

import { FormikLabelInput } from '../LabelInput';

const OtherQuestions = () => {
  const prefix = 'others';
  return (
    <Box pt={3}>
      <FormikLabelInput text="Motivación" name={`${prefix}.motivation`} />
      <FormikLabelInput text="Plan" name={`${prefix}.plan`} />
      <FormikLabelInput
        text="Notas"
        component="textarea"
        name={`${prefix}.notes`}
      />
    </Box>
  );
};

export default OtherQuestions;
