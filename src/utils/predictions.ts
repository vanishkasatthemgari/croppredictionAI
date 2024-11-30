import { SoilData, CropPrediction } from '../types';

// Simplified prediction logic - in a real app, this would be handled by a ML model
export function generatePredictions(soilData: SoilData): CropPrediction[] {
  const predictions: CropPrediction[] = [
    {
      cropName: 'Wheat',
      yieldPrediction: calculateYield(soilData, 6.0, 40, 120, 25, 30),
      confidence: calculateConfidence(soilData, 6.0, 40, 120, 25, 30),
    },
    {
      cropName: 'Rice',
      yieldPrediction: calculateYield(soilData, 6.5, 60, 100, 20, 25),
      confidence: calculateConfidence(soilData, 6.5, 60, 100, 20, 25),
    },
    {
      cropName: 'Corn',
      yieldPrediction: calculateYield(soilData, 7.0, 45, 140, 30, 35),
      confidence: calculateConfidence(soilData, 7.0, 45, 140, 30, 35),
    },
    {
      cropName: 'Soybeans',
      yieldPrediction: calculateYield(soilData, 6.8, 50, 110, 22, 28),
      confidence: calculateConfidence(soilData, 6.8, 50, 110, 22, 28),
    },
  ];

  return predictions;
}

function calculateYield(
  soilData: SoilData,
  optimalPh: number,
  optimalMoisture: number,
  optimalNitrogen: number,
  optimalPhosphorus: number,
  optimalPotassium: number
): number {
  const phFactor = 1 - Math.abs(soilData.ph - optimalPh) / 7;
  const moistureFactor = 1 - Math.abs(soilData.moisture - optimalMoisture) / 100;
  const nitrogenFactor = Math.min(soilData.nitrogen / optimalNitrogen, 1);
  const phosphorusFactor = Math.min(soilData.phosphorus / optimalPhosphorus, 1);
  const potassiumFactor = Math.min(soilData.potassium / optimalPotassium, 1);

  const baseYield = 5;
  const yieldMultiplier = (phFactor + moistureFactor + nitrogenFactor + phosphorusFactor + potassiumFactor) / 5;

  return Number((baseYield * yieldMultiplier).toFixed(1));
}

function calculateConfidence(
  soilData: SoilData,
  optimalPh: number,
  optimalMoisture: number,
  optimalNitrogen: number,
  optimalPhosphorus: number,
  optimalPotassium: number
): number {
  const phDiff = 1 - Math.abs(soilData.ph - optimalPh) / 7;
  const moistureDiff = 1 - Math.abs(soilData.moisture - optimalMoisture) / 100;
  const nitrogenDiff = Math.min(soilData.nitrogen / optimalNitrogen, 1);
  const phosphorusDiff = Math.min(soilData.phosphorus / optimalPhosphorus, 1);
  const potassiumDiff = Math.min(soilData.potassium / optimalPotassium, 1);

  const confidence = ((phDiff + moistureDiff + nitrogenDiff + phosphorusDiff + potassiumDiff) / 5) * 100;
  return Number(confidence.toFixed(0));
}