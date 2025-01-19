import { Bed, Bath, Square, MapPin, MoreHorizontal, Heart, Scale } from 'lucide-react';
import { Property } from '../types';
import ProgressBar from './ProgressBar'
import { Link } from 'react-router-dom';
import { usePropertyStore } from '../store/propertyStore';
import { toast } from 'react-hot-toast';
import { convertToCroreAndLakh, extractIndianCity } from '../lib/utils';




interface SmallPropertyCardProps {
  property: Property;
}

export function SmallPropertyCard({ property }: SmallPropertyCardProps) {
  const { 
      addToWishlist, 
      removeFromWishlist, 
      addToCompare, 
      removeFromCompare,
      isInWishlist,
      isInCompareList
    } = usePropertyStore();

    const handleWishlistClick = () => {
      if (isInWishlist(property.id)) {
        removeFromWishlist(property.id);
        toast.success('Removed from wishlist');
      } else {
        addToWishlist(property);
        toast.success('Added to wishlist');
      }
    };
  
    const handleCompareClick = () => {
      if (isInCompareList(property.id)) {
        removeFromCompare(property.id);
        toast.success('Removed from compare list');
      } else {
        const added = addToCompare(property);
        if (added) {
          toast.success('Added to compare list');
        } else {
          toast.error('Compare list is full (max 5 properties)');
        }
      }
    };

  return (
    <Link to={`/property/${property.id}`} className="block relative">
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 relative w-44 h-60">
        <div className="relative w-full h-full">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-between p-3 text-white">

            <div className="absolute flex flex-col top-2 right-2 space-y-1">
              {/* <button
                onClick={(event) => {
                  event.preventDefault(); 
                  event.stopPropagation();
                  console.log('More options clicked');
                }}
                className="p-1 rounded-full hover:bg-gray-200 hover:bg-opacity-30"
                aria-label="More options"
              >
                <MoreHorizontal className="w-4 h-4 text-white" />
              </button> */}
              <button
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleWishlistClick()
                }}
                className="p-1 rounded-full bg-black bg-opacity-20 hover:bg-red-200 hover:bg-opacity-30 shadow-lg border border-white rounded full"
                aria-label="Like property"
              >
                <Heart className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleCompareClick()
                }}
                className="p-1 rounded-full hover:bg-blue-200 hover:bg-opacity-30 shadow-lg bg-black bg-opacity-20 border border-white rounded full"
                aria-label="Compare property"
              >
                <Scale className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="absolute bottom-2 left-2 text-xs space-y-1 ">
              {/* <div className="flex items-center">
                <span className="truncate font-semibold">{property.title}</span>
              </div> */}
              
              <div className="flex items-center">
                <div
                  className={`bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center p-1 `}

                ><img
                    src="https://i.postimg.cc/cHgZjqp8/output-onlinepngtools.png"
                    alt="HouseGPT"
                    className="w-2 h-2"
                  /></div>
                <span className="truncate font-semibold text-xs ml-1">{property.title}</span>
              </div>
              <div className='flex flex-row gap-1'>
              <div className="flex items-center">
                <span className="truncate font-bold text-[10px] text-sky-600 bg-white px-1 rounded bg-opacity-80">{convertToCroreAndLakh(property.price)}</span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-[10px] h-[10px] mr-0.5 mt-[1px]" />
                <span className="truncate font-semibold text-[10px]">{extractIndianCity(property.location)}</span>
              </div>
              </div>
              <div className="flex flex-row">

                <div className="flex items-center mr-1 font-semibold">
                  <Bed className="w-3 h-3 mr-1" />
                  <span>{property.bedrooms}</span>
                </div>
                <div className="flex items-center mr-1 font-semibold">
                  <Bath className="w-3 h-3 mr-1" />
                  <span>{property.bathrooms}</span>
                </div>
                <div className="flex items-center mr-1 mt-0.5 font-semibold">
                  <Square className="w-3 h-3 mr-1" />
                  <span>{property.sqft}</span>
                </div>
              </div>
            </div>
            <ProgressBar percentage={67} />

            {/* <div className="absolute bottom-2 right-2">
              <button
                className={`bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center p-1 animate-bounce`}

              >
                <img
                  src="https://i.postimg.cc/cHgZjqp8/output-onlinepngtools.png"
                  alt="HouseGPT"
                  className="w-4 h-4"
                />
              </button>
            </div> */}

          </div>
        </div>

        <div className="p-3 text-xs">
          <h3 className="font-semibold text-sm">{property.title}</h3>
          <p className="font-bold text-sm mt-1">
            ₹{property.price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
