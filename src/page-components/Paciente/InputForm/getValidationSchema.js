import * as Yup from 'yup';

function createSicknessSchema(addedFields) {
  return Yup.object().shape({
    hasIt: Yup.boolean(),
    diagnosisDate: Yup.date(),
    notes: Yup.string(),
    ...addedFields,
  });
}

function createPhysicalExplorationSchema() {
  return Yup.object().shape({
    lightPerception: Yup.string(),
    handMovement: Yup.string(),
    fingerCount: Yup.string(),
    eyeAcuity: Yup.string(),
  });
}

function createLeftRighEyeDecimal() {
  return Yup.object().shape({
    rightEye: Yup.number(),
    leftEye: Yup.number(),
  });
}

const DiabetesSicknessSchema = createSicknessSchema({
  sugar: Yup.object().shape({
    value: Yup.number(),
    levels: Yup.number()
      .min(60, 'El número debe ser mayor a 60 y menor a 100')
      .max(100, 'El número debe ser mayor a 60 y menor a 100'),
  }),
});

function getValidationSchema() {
  // Datos personales
  return Yup.object().shape({
    name: Yup.string()
      .min(2, 'El nombre es requerido')
      .required('El nombre es requerido'),
    email: Yup.string()
      .required('El correo es requerido')
      .email('La dirección de correo electrónico es inválida'),
    address: Yup.string(),
    occupation: Yup.string(),
    birthdate: Yup.string(),
    cellphoneNumber: Yup.string().required('Se requiere un número de teléfono'),
    recommendedBy: Yup.string(),

    // Antecedentes Médicos
    medicalRecords: Yup.object().shape({
      diabetes: DiabetesSicknessSchema,
      highPressure: createSicknessSchema(),
      medicineAllergies: Yup.string(),
      asthma: Yup.boolean(),
      anesthesia: Yup.boolean(),
      bleeding: Yup.boolean(),
      arthritis: Yup.boolean(),
      heartDiseases: createSicknessSchema(),
      previousEyeSurgeries: Yup.boolean(),
      hasUsedGlasses: Yup.boolean(),
      hasUsedContacts: Yup.boolean(),
      notes: Yup.string(),
    }),

    // Otros
    currentDiagnosis: Yup.object().shape({
      peea: Yup.string(),
      physicalExploration: Yup.object().shape({
        rightEye: createPhysicalExplorationSchema(),
        leftEye: createPhysicalExplorationSchema(),
      }),
      biomichroscopia: Yup.string(),
      inEyePressure: Yup.object().shape({
        rightEye: Yup.number(),
        leftEye: Yup.number(),
      }),
      interPupilarDistance: Yup.number(),
      gonioscopia: Yup.number()
        .integer('El número debe ser entero')
        .min(1, 'El número debe estar entre 1 y 4')
        .max(4, 'El número debe estar entre 1 y 4'),
      prescription: Yup.object().shape({
        objective: createLeftRighEyeDecimal(),
        subjective: createLeftRighEyeDecimal(),
      }),
      specialStudies: Yup.object().shape({
        inEyeGlassCalculus: createLeftRighEyeDecimal(),
        visualField: Yup.string(),
        eco: Yup.boolean(),
        fluorangiography: Yup.boolean(),
        paquimetry: Yup.object().shape({
          rightEye: Yup.number()
            .integer('El número debe ser entero')
            .positive('El número debe debe ser positivo'),
        }),
        topography: Yup.boolean(),
      }),
      diagnostic: Yup.string(),
      treatment: Yup.string(),
    }),

    others: Yup.object().shape({
      motivation: Yup.string(),
      notes: Yup.string(),
      plan: Yup.string(),
    }),

    // Citas
    appointments: Yup.array(),
  });
}

export default getValidationSchema;
