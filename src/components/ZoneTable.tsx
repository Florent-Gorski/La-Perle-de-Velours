import React from 'react';
import { MapPin, Clock, Car } from 'lucide-react';

interface Zone {
  ville: string;
  codePostal: string;
  tempsTrajet: string;
  fraisDeplacementCHF: number;
}

interface ZoneTableProps {
  zones: Zone[];
}

const ZoneTable: React.FC<ZoneTableProps> = ({ zones }) => {
  return (
    <div className="bg-rosa-ivory rounded-2xl shadow-lg overflow-hidden border border-rosa-beige/30">
      <div className="bg-gradient-to-r from-rosa-honey to-rosa-light-honey px-6 py-6">
        <h3 className="text-xl font-playfair font-bold text-white">Zones desservies</h3>
        <p className="text-white/90 font-inter text-sm">Frais de déplacement et temps de trajet</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-rosa-soft-beige">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-inter font-medium text-rosa-warm-gray/70 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>Ville</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-inter font-medium text-rosa-warm-gray/70 uppercase tracking-wider">
                Code postal
              </th>
              <th className="px-6 py-4 text-left text-xs font-inter font-medium text-rosa-warm-gray/70 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>Temps de trajet</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-inter font-medium text-rosa-warm-gray/70 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <Car className="w-4 h-4" />
                  <span>Frais (CHF)</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-rosa-ivory divide-y divide-rosa-beige/30">
            {zones.map((zone, index) => (
              <tr key={index} className="hover:bg-rosa-soft-beige transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-inter font-medium text-rosa-warm-gray">
                  {zone.ville}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-inter text-rosa-warm-gray/70">
                  {zone.codePostal}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-inter text-rosa-warm-gray/70">
                  {zone.tempsTrajet}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-inter font-medium bg-rosa-honey/20 text-rosa-honey">
                    {zone.fraisDeplacementCHF} CHF
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ZoneTable;