import React from 'react';
import { Flex, Box } from '@rebass/grid';
import { FormikLabelInput, FormikSelectLabelInput } from '../LabelInput';

const CurrentDiagnosis = () => {
  const prefix = 'currentDiagnosis';
  const PhysicalExplorationEye = props => {
    const { name, text, ...rest } = props;
    const fieldName = `${prefix}.${name}`;
    return (
      <Box width={[1, 1 / 2]} pb={3} {...rest}>
        <Box pb={3} pt={2}>
          <h4>{text}</h4>
        </Box>
        <FormikLabelInput
          text="Percepción de luz"
          name={`${fieldName}.lightPerception`}
        />
        <FormikLabelInput
          text="Movimiento de manos"
          name={`${fieldName}.handMovement`}
        />
        <FormikLabelInput
          text="Conteo de dedos"
          name={`${fieldName}.fingerCount`}
        />
        <FormikLabelInput
          text="Agudeza visual (Cartilla de Snellen)"
          name={`${fieldName}.eyeAcuity`}
        />
      </Box>
    );
  };
  const LeftRightEyeNumeric = props => {
    const { text, name } = props;
    return (
      <>
        <Box pb={3} pt={2}>
          <h4>{text}</h4>
        </Box>
        <Flex>
          <Box width={[1, 1 / 2]} pr={[0, 3]}>
            <FormikLabelInput
              text="Ojo izquierdo"
              name={`${prefix}.${name}.leftEye`}
              type="number"
            />
          </Box>
          <Box width={[1, 1 / 2]} pl={[0, 3]}>
            <FormikLabelInput
              text="Ojo derecho"
              name={`${prefix}.${name}.rightEye`}
              type="number"
            />
          </Box>
        </Flex>
      </>
    );
  };
  const SpecialStudies = () => {
    const fieldPrefix = `${prefix}.specialStudies`;
    return (
      <>
        <Box py={2}>
          <h2>Estudios especiales</h2>
        </Box>
        <LeftRightEyeNumeric
          text="Cálculo de lente intraocular"
          name="specialStudies.inEyeGlassCalculus"
        />
        <FormikLabelInput
          text="Campo visual"
          name={`${fieldPrefix}.visualField`}
        />
        <FormikSelectLabelInput text="Eco" name={`${fieldPrefix}.eco`}>
          <option value={false}>no</option>
          <option value>sí</option>
        </FormikSelectLabelInput>
        <FormikSelectLabelInput
          text="Fluorangiografía"
          name={`${fieldPrefix}.fluorangiography`}
        >
          <option value={false}>no</option>
          <option value>sí</option>
        </FormikSelectLabelInput>
        <FormikSelectLabelInput
          text="Topografía"
          name={`${fieldPrefix}.topography`}
        >
          <option value={false}>no</option>
          <option value>sí</option>
        </FormikSelectLabelInput>
        <LeftRightEyeNumeric
          text="Paquimetría"
          name="specialStudies.paquimetry"
        />
      </>
    );
  };
  return (
    <Box pt={3}>
      <FormikLabelInput text="PEEA" name={`${prefix}.peea`} />
      <Box py={3}>
        <h4>Exploración Física</h4>
      </Box>
      <Flex flexDirection={['column', 'row']}>
        <PhysicalExplorationEye
          text="Ojo izquierdo"
          name="physicalExploration.leftEye"
          pr={[0, 3]}
        />
        <PhysicalExplorationEye
          text="Ojo derecho"
          name="physicalExploration.rightEye"
          pl={[0, 3]}
        />
      </Flex>
      <FormikLabelInput
        text="Biomicroscopía"
        name={`${prefix}.biomichroscopia`}
      />
      <LeftRightEyeNumeric text="Presión intraocular" name="inEyePressure" />
      <FormikLabelInput
        text="Distancia interpupilar"
        type="number"
        name={`${prefix}.interPupilarDistance`}
      />
      <LeftRightEyeNumeric
        text="Prescripción subjetiva"
        name="prescription.subjective"
      />
      <LeftRightEyeNumeric
        text="Prescripción objetiva"
        name="prescription.objective"
      />
      <SpecialStudies />
      <FormikLabelInput text="Diagnóstico" name={`${prefix}.diagnostic`} />
      <FormikLabelInput text="Tratamiento" name={`${prefix}.treatment`} />
    </Box>
  );
};

export default CurrentDiagnosis;
