import React from 'react';
import { Header } from './components/Header';
import { SoilDataForm } from './components/DataInput/SoilDataForm';
import { PredictionChart } from './components/Dashboard/PredictionChart';
import { WeatherWidget } from './components/Dashboard/WeatherWidget';
import { SoilData, WeatherData, CropPrediction } from './types';
import { generatePredictions } from './utils/predictions';

function App() {
  const [weather] = React.useState<WeatherData>({
    temperature: 25,
    rainfall: 150,
    humidity: 65,
  });

  const [predictions, setPredictions] = React.useState<CropPrediction[]>([
    { cropName: 'Wheat', yieldPrediction: 4.5, confidence: 85 },
    { cropName: 'Rice', yieldPrediction: 5.2, confidence: 90 },
    { cropName: 'Corn', yieldPrediction: 6.8, confidence: 88 },
    { cropName: 'Soybeans', yieldPrediction: 3.2, confidence: 82 },
  ]);

  const handleSoilDataSubmit = (data: SoilData) => {
    const newPredictions = generatePredictions(data);
    setPredictions(newPredictions);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-6">Crop Yield Predictions</h2>
              <PredictionChart predictions={predictions} />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <WeatherWidget weather={weather} />
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Soil Data Input</h2>
              <SoilDataForm onSubmit={handleSoilDataSubmit} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;