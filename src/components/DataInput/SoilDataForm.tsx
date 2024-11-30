import React from 'react';
import { SoilData } from '../../types';

interface Props {
  onSubmit: (data: SoilData) => void;
  className?: string;
}

export const SoilDataForm: React.FC<Props> = ({ onSubmit, className = '' }) => {
  const [formData, setFormData] = React.useState<SoilData>({
    ph: 7,
    moisture: 50,
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field: keyof SoilData, value: string) => {
    const numValue = parseFloat(value) || 0;
    setFormData(prev => ({ ...prev, [field]: numValue }));
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ph" className="block text-sm font-medium text-gray-700">
            Soil pH (0-14)
          </label>
          <input
            id="ph"
            type="number"
            step="0.1"
            min="0"
            max="14"
            value={formData.ph}
            onChange={(e) => handleInputChange('ph', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="moisture" className="block text-sm font-medium text-gray-700">
            Moisture (%)
          </label>
          <input
            id="moisture"
            type="number"
            min="0"
            max="100"
            value={formData.moisture}
            onChange={(e) => handleInputChange('moisture', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="nitrogen" className="block text-sm font-medium text-gray-700">
            Nitrogen (mg/kg)
          </label>
          <input
            id="nitrogen"
            type="number"
            min="0"
            value={formData.nitrogen}
            onChange={(e) => handleInputChange('nitrogen', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="phosphorus" className="block text-sm font-medium text-gray-700">
            Phosphorus (mg/kg)
          </label>
          <input
            id="phosphorus"
            type="number"
            min="0"
            value={formData.phosphorus}
            onChange={(e) => handleInputChange('phosphorus', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="potassium" className="block text-sm font-medium text-gray-700">
            Potassium (mg/kg)
          </label>
          <input
            id="potassium"
            type="number"
            min="0"
            value={formData.potassium}
            onChange={(e) => handleInputChange('potassium', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
      >
        Update Soil Data
      </button>
    </form>
  );
};