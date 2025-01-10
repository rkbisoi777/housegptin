import React from 'react';
import { Property } from '../types';
import { PropertyCard } from './PropertyCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PropertyGridProps {
  properties: Property[];
  maxInitialDisplay?: number;
}

export function PropertyGrid({ properties, maxInitialDisplay = 4 }: PropertyGridProps) {
  const hasMore = properties.length > maxInitialDisplay;
  const displayedProperties = properties.slice(0, maxInitialDisplay);

  return (
    <div className="space-y-2 bg-white">
      {/* <p className="text-xs">{JSON.stringify(properties)}</p> */}
      <div className="overflow-x-auto bg-white">
        <div className="grid grid-flow-col auto-cols-max gap-2 bg-white">
          {displayedProperties.map(property => (
            <PropertyCard key={property.id} property={property} compact />
          ))}
        </div>
      </div>
      {hasMore && (
        <div className="text-right -mt-1.5">
          <Link
            to="/properties"
            state={{ properties }}
            className="inline-flex items-center text-blue-500 hover:text-blue-600 text-sm p-0.5"
          >
            View all {properties.length} properties
            <ChevronRight className="w-4 h-4 mt-0.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
