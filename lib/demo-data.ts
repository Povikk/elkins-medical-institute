import type { AppData } from "./model";

export const demoData: AppData = {
  settings: {
    doctor: "Dr. Élias Moreau",
    practice: "Elkins Medical Institute",
    city: "Valentine, New Hanover",
    header: "Soins, chirurgie et visites à domicile",
    signature: "E. Moreau, M.D.",
    rpDate: "18 septembre 1900",
    currency: "$",
  },
  patients: [
    { id: "p1", dossier: "NH-0017", firstName: "Abigail", lastName: "Caldwell", sex: "Femme", age: "31 ans", profession: "Institutrice", address: "Cumberland Falls", emergencyContact: "Jonas Caldwell", firstVisit: "12 septembre 1900", history: "Fièvre pulmonaire durant l'hiver 1896. Ancienne fracture du poignet gauche.", allergies: "Réaction connue au laudanum.", confidential: "Patiente anxieuse depuis l'attaque de la diligence.", status: "convalescence", isDemo: true },
    { id: "p2", dossier: "NH-0018", firstName: "Silas", lastName: "Mercer", sex: "Homme", age: "46 ans", profession: "Convoyeur", address: "Valentine", emergencyContact: "Martha Mercer", firstVisit: "14 septembre 1900", history: "Ancienne blessure par balle à l'épaule droite.", allergies: "Aucune connue.", confidential: "", status: "actif", isDemo: true },
    { id: "p3", dossier: "NH-0019", firstName: "Nora", lastName: "Bell", sex: "Femme", age: "24 ans", profession: "Palefrenière", address: "Heartland Overflow", emergencyContact: "Edwin Bell", firstVisit: "16 septembre 1900", history: "Aucun antécédent notable.", allergies: "Aucune connue.", confidential: "", status: "hospitalise", isDemo: true },
  ],
  consultations: [
    { id: "c1", patientId: "p1", date: "17 septembre 1900", category: "visite de contrôle", reason: "Contrôle d'une plaie au flanc", symptoms: "Douleur modérée, sommeil difficile", observations: "Plaie propre, inflammation en recul.", exam: "Pouls régulier. Pas de fièvre notable.", diagnosis: "Cicatrisation satisfaisante", care: "Nettoyage à l'eau bouillie, pansement renouvelé.", treatment: "Repos strict et pansement quotidien.", recommendations: "Éviter tout effort pendant sept jours.", followUp: "21 septembre 1900", temperature: "37,2 °C", heartRate: "76/min", respiratoryRate: "16/min", notes: "La patiente souhaite reprendre ses leçons trop tôt.", injuries: [{ id: "i1", location: "Flanc gauche", type: "Coupure", severity: "Modérée", circumstances: "Éclat de bois lors d'une attaque de diligence", care: "Nettoyage et suture simple", healed: false }], isDemo: true },
    { id: "c2", patientId: "p2", date: "16 septembre 1900", category: "blessure", reason: "Chute de cheval", symptoms: "Douleur à la cheville droite", observations: "Gonflement, appui difficile.", exam: "Mobilité réduite, aucune déformation évidente.", diagnosis: "Forte entorse présumée", care: "Bandage et immobilisation.", treatment: "Repos, compresses froides, canne.", recommendations: "Revenir si la douleur augmente.", followUp: "20 septembre 1900", temperature: "", heartRate: "82/min", respiratoryRate: "18/min", notes: "Le cheval a trébuché près de la gare.", injuries: [{ id: "i2", location: "Cheville droite", type: "Contusion / entorse", severity: "Moyenne", circumstances: "Chute de cheval", care: "Immobilisation", healed: false }], isDemo: true },
  ],
  appointments: [
    { id: "a1", patientId: "p2", date: "20 septembre 1900", time: "09:30", reason: "Contrôle de la cheville", status: "prevu", notes: "Prévoir un bandage propre.", isDemo: true },
    { id: "a2", patientId: "p1", date: "21 septembre 1900", time: "14:00", reason: "Contrôle de la plaie", status: "prevu", notes: "", isDemo: true },
  ],
  prescriptions: [],
  fees: [
    { id: "f1", patientId: "p2", date: "16 septembre 1900", label: "Consultation et bandage", amount: 3.5, status: "regle", isDemo: true },
    { id: "f2", patientId: "p1", date: "17 septembre 1900", label: "Visite de contrôle", amount: 1.5, status: "non_regle", isDemo: true },
  ],
};
