export type PatientStatus = "actif" | "convalescence" | "hospitalise" | "decede" | "archive";

export interface PatientPhoto {
  id: string;
  dataUrl: string;
  date: string;
  label: string;
}

export interface Patient {
  id: string;
  dossier: string;
  firstName: string;
  lastName: string;
  sex: string;
  age: string;
  profession: string;
  address: string;
  telegram?: string;
  emergencyContact: string;
  bloodType?: string;
  firstVisit: string;
  history: string;
  allergies: string;
  confidential: string;
  status: PatientStatus;
  photos?: PatientPhoto[];
  isDemo?: boolean;
}

export interface Injury {
  id: string;
  location: string;
  type: string;
  severity: string;
  circumstances: string;
  care: string;
  healed: boolean;
}

export interface Consultation {
  id: string;
  patientId: string;
  date: string;
  time?: string;
  category: string;
  reason: string;
  symptoms: string;
  observations: string;
  exam: string;
  diagnosis: string;
  care: string;
  treatment: string;
  recommendations: string;
  followUp: string;
  temperature: string;
  heartRate: string;
  respiratoryRate: string;
  notes: string;
  injuries: Injury[];
  isDemo?: boolean;
}

export interface Appointment {
  id: string;
  patientId: string;
  date: string;
  time: string;
  reason: string;
  status: "prevu" | "honore" | "annule";
  notes: string;
  isDemo?: boolean;
}

export interface Prescription {
  id: string;
  patientId: string;
  date: string;
  treatment: string;
  dosage: string;
  instructions: string;
  signature: string;
  isDemo?: boolean;
}

export interface Fee {
  id: string;
  patientId: string;
  date: string;
  label: string;
  amount: number;
  status: "regle" | "non_regle" | "offert";
  isDemo?: boolean;
}

export interface Settings {
  doctor: string;
  practice: string;
  city: string;
  header: string;
  signature: string;
  rpDate: string;
  currency: string;
}

export interface AppData {
  patients: Patient[];
  consultations: Consultation[];
  appointments: Appointment[];
  prescriptions: Prescription[];
  fees: Fee[];
  settings: Settings;
}
