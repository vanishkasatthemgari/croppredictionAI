import React from 'react';
import { Cloud, Sun, Droplets, Thermometer } from 'lucide-react';
import { WeatherData } from '../../types';

interface Props {
  weather: WeatherData;
}

export const WeatherWidget: React.FC<Props> = ({ weather }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Cloud className="mr-2" /> Current Weather
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <Thermometer className="text-red-500 mb-2" />
          <span className="text-sm text-gray-600">Temperature</span>
          <span className="font-semibold">{weather.temperature}°C</span>
        </div>
        <div className="flex flex-col items-center">
          <Droplets className="text-blue-500 mb-2" />
          <span className="text-sm text-gray-600">Rainfall</span>
          <span className="font-semibold">{weather.rainfall} mm</span>
        </div>
        <div className="flex flex-col items-center">
          <Sun className="text-yellow-500 mb-2" />
          <span className="text-sm text-gray-600">Humidity</span>
          <span className="font-semibold">{weather.humidity}%</span>
        </div>
      </div>
    </div>
  );
};