export interface SoilData {
  ph: number;
  moisture: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
}

export interface WeatherData {
  temperature: number;
  rainfall: number;
  humidity: number;
}

export interface CropPrediction {
  cropName: string;
  yieldPrediction: number;
  confidence: number;
}

export interface LocationData {
  latitude: number;
  longitude: number;
  region: string;
}