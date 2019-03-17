/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect';

import PatientInputForm from '../components/PatientInputForm';
import theme from '../utils/theme';

afterEach(cleanup);

function getTestState() {
  const defaultDate = new Date('2000-01-01T12:00:00');
  const stringDefaultDate = defaultDate.toDateString();

  return {
    name: 'aaaa',
    email: 'aaaa@gmail.com',
    address: 'aaaaaaa',
    occupation: 'aaaa',
    birthdate: stringDefaultDate,
    cellphoneNumber: 'aaaa',
    recommendedBy: 'aaaa',

    medicalRecords: {
      diabetes: {
        hasIt: true,
        diagnosisDate: stringDefaultDate,
        sugar: {
          value: 1,
          levels: 61, // 60 - 800
        },
        notes: 'aaaa',
      },
      highPressure: {
        hasIt: true,
        diagnosisDate: stringDefaultDate,
        notes: 'aaaa',
      },
      medicineAllergies: 'aaaa', // string
      asthma: true,
      anesthesia: true,
      bleeding: true,
      arthritis: true,
      heartDiseases: {
        hasIt: true,
        diagnosisDate: stringDefaultDate,
        notes: 'aaaa',
      },
      previousEyeSurgeries: true,
      hasUsedGlasses: true,
      hasUsedContacts: true,
      notes: 'aaaa',
    },

    currentDiagnosis: {
      peea: 'aaaa',
      physicalExploration: {
        rightEye: {
          lightPerception: 'aaaa',
          handMovement: 'aaaa',
          fingerCount: 'aaaa',
          eyeAcuity: 'aaaa', // agudeza visual con cartilla de Snellen
        },
        leftEye: {
          lightPerception: 'aaaa',
          handMovement: 'aaaa',
          fingerCount: 'aaaa',
          eyeAcuity: 'aaaa',
        },
      },
      biomichroscopia: 'aaaa',
      inEyePressure: {
        rightEye: 1.0,
        leftEye: 1.0,
      },
      interPupilarDistance: 61,
      gonioscopia: 2, // I - IV
      prescription: {
        objective: {
          rightEye: 1.0,
          leftEye: 1.0,
        },
        subjective: {
          rightEye: 1,
          leftEye: 1,
        },
      },
      specialStudies: {
        inEyeGlassCalculus: {
          // Calculo de lente intra-ocular
          rightEye: 1,
          leftEye: 1,
        },
        visualField: 'aaaa',
        eco: true,
        fluorangiography: true,
        paquimetry: {
          rightEye: 100,
          leftEye: 100,
        },
        topography: true,
      },
      diagnostic: 'aaaa',
      treatment: 'aaaa',
    },

    others: {
      motivation: 'aaaa',
      plan: 'aaaa',
      notes: 'aaaa',
    },

    appointments: [],
  };
}

describe('Pruebas de formulario de paciente', () => {
  test('Se hace submit al formulario con datos correctos', () => {
    const mockSubmit = jest.fn(() => {});

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <PatientInputForm initialState={getTestState()} onSubmit={mockSubmit} />
      </ThemeProvider>
    );

    fireEvent.click(getByText(/Guardar/i));
    expect(mockSubmit).toHaveBeenCalled();
  });
});
