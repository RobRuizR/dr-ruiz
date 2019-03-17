function getInitialState() {
  const defaultDate = new Date('2000-01-01T12:00:00');
  const stringDefaultDate = defaultDate.toDateString();

  return {
    name: '',
    email: '',
    address: '',
    occupation: '',
    birthdate: stringDefaultDate,
    cellphoneNumber: '',
    recommendedBy: '',

    medicalRecords: {
      diabetes: {
        hasIt: false,
        diagnosisDate: stringDefaultDate,
        sugar: {
          value: 0,
          levels: 60, // 60 - 800
        },
        notes: '',
      },
      highPressure: {
        hasIt: false,
        diagnosisDate: stringDefaultDate,
        notes: '',
      },
      medicineAllergies: '', // string
      asthma: false,
      anesthesia: false,
      bleeding: false,
      arthritis: false,
      heartDiseases: {
        hasIt: false,
        diagnosisDate: stringDefaultDate,
        notes: '',
      },
      previousEyeSurgeries: false,
      hasUsedGlasses: false,
      hasUsedContacts: false,
      notes: '',
    },

    currentDiagnosis: {
      peea: '',
      physicalExploration: {
        rightEye: {
          lightPerception: '',
          handMovement: '',
          fingerCount: '',
          eyeAcuity: '', // agudeza visual con cartilla de Snellen
        },
        leftEye: {
          lightPerception: '',
          handMovement: '',
          fingerCount: '',
          eyeAcuity: '',
        },
      },
      biomichroscopia: '',
      inEyePressure: {
        rightEye: 0,
        leftEye: 0,
      },
      interPupilarDistance: 60,
      gonioscopia: 1, // I - IV
      prescription: {
        objective: {
          rightEye: 0.0,
          leftEye: 0.0,
        },
        subjective: {
          rightEye: 0.0,
          leftEye: 0.0,
        },
      },
      specialStudies: {
        inEyeGlassCalculus: {
          // Calculo de lente intra-ocular
          rightEye: 0.0,
          leftEye: 0.0,
        },
        visualField: '',
        eco: false,
        fluorangiography: false,
        paquimetry: {
          rightEye: 500,
          leftEye: 500,
        },
        topography: false,
      },
      diagnostic: '',
      treatment: '',
    },

    others: {
      motivation: '',
      plan: '',
      notes: '',
    },

    appointments: [],
  };
}

export default getInitialState;
