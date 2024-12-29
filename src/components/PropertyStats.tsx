import React from 'react';
import { Bed, Bath, Square } from 'lucide-react';
import { Property } from '../types';

interface PropertyStatsProps {
  property: Property;
}

export function PropertyStats({ property }: PropertyStatsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
      <div className="flex items-center">
        <Bed className="w-5 h-5 mr-2 text-gray-500" />
        <div>
          <p className="text-sm text-gray-500">Bedrooms</p>
          <p className="font-semibold">{property.bedrooms}</p>
        </div>
      </div>
      <div className="flex items-center">
        <Bath className="w-5 h-5 mr-2 text-gray-500" />
        <div>
          <p className="text-sm text-gray-500">Bathrooms</p>
          <p className="font-semibold">{property.bathrooms}</p>
        </div>
      </div>
      <div className="flex items-center col-span-2 sm:col-span-1">
        <Square className="w-5 h-5 mr-2 text-gray-500" />
        <div>
          <p className="text-sm text-gray-500">Square Feet</p>
          <p className="font-semibold">{property.sqft}</p>
        </div>
      </div>
    </div>
  );
}