export interface Zone {
  ville: string;
  codePostal: string;
  tempsTrajet: string;
  fraisDeplacementCHF: number;
}

export const zones: Zone[] = [
  { ville: 'Lausanne', codePostal: '1000-1018', tempsTrajet: '0-15 min', fraisDeplacementCHF: 10 },
  { ville: 'Renens', codePostal: '1020', tempsTrajet: '15 min', fraisDeplacementCHF: 15 },
  { ville: 'Prilly', codePostal: '1008', tempsTrajet: '10 min', fraisDeplacementCHF: 10 },
  { ville: 'Pully', codePostal: '1009', tempsTrajet: '15 min', fraisDeplacementCHF: 10 },
  { ville: 'Morges', codePostal: '1110', tempsTrajet: '25 min', fraisDeplacementCHF: 25 },
  { ville: 'Vevey', codePostal: '1800', tempsTrajet: '35 min', fraisDeplacementCHF: 20 },
  { ville: 'Montreux', codePostal: '1820', tempsTrajet: '40 min', fraisDeplacementCHF: 25 },
  { ville: 'Yverdon-les-Bains', codePostal: '1400', tempsTrajet: '45 min', fraisDeplacementCHF: 35 },
  { ville: 'Nyon', codePostal: '1260', tempsTrajet: '50 min', fraisDeplacementCHF: 40 },
  { ville: 'Rolle', codePostal: '1180', tempsTrajet: '35 min', fraisDeplacementCHF: 35 },
];