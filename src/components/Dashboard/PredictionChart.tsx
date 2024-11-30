import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CropPrediction } from '../../types';

interface Props {
  predictions: CropPrediction[];
}

export const PredictionChart: React.FC<Props> = ({ predictions }) => {
  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={predictions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="cropName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="yieldPrediction" fill="#059669" name="Predicted Yield (tons/ha)" />
          <Bar dataKey="confidence" fill="#0891b2" name="Confidence (%)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};