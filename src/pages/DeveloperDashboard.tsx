import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Property } from '../types';
import { Developer } from '../types/auth';
import { Building, Plus, Settings, BarChart2 } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { toast } from 'react-hot-toast';

export function DeveloperDashboard() {
  const navigate = useNavigate();
  const [developer, setDeveloper] = useState<Developer | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [stats, setStats] = useState({
    totalProperties: 0,
    activeListings: 0,
    totalViews: 0,
    inquiries: 0
  });

  useEffect(() => {
    const fetchDeveloperData = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          navigate('/');
          return;
        }

        const { data: developerData, error: developerError } = await supabase
          .from('developers')
          .select('*')
          .eq('id', user.id)
          .single();

        if (developerError) throw developerError;
        setDeveloper(developerData);

        const { data: propertiesData, error: propertiesError } = await supabase
          .from('properties')
          .select('*')
          .eq('developer_id', user.id);

        if (propertiesError) throw propertiesError;
        setProperties(propertiesData);

        // Update stats
        setStats({
          totalProperties: propertiesData.length,
          activeListings: propertiesData.filter(p => p.status === 'Active').length,
          totalViews: Math.floor(Math.random() * 1000), // Mock data
          inquiries: Math.floor(Math.random() * 100) // Mock data
        });

      } catch (error) {
        console.error('Error fetching developer data:', error);
        toast.error('Failed to load dashboard data');
      }
    };

    fetchDeveloperData();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">{developer?.company_name || 'Developer Dashboard'}</h1>
            <p className="text-gray-600">Manage your properties and view insights</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/add-property')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              <Plus className="w-4 h-4" />
              Add Property
            </button>
            <button
              onClick={() => navigate('/developer/settings')}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <Building className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Total Properties</p>
                <p className="text-2xl font-bold">{stats.totalProperties}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <BarChart2 className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Active Listings</p>
                <p className="text-2xl font-bold">{stats.activeListings}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <i className="fas fa-eye w-8 h-8 text-purple-500 flex items-center justify-center text-xl" />
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-2xl font-bold">{stats.totalViews}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <i className="fas fa-envelope w-8 h-8 text-orange-500 flex items-center justify-center text-xl" />
              <div>
                <p className="text-sm text-gray-600">Inquiries</p>
                <p className="text-2xl font-bold">{stats.inquiries}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Properties List */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Your Properties</h2>
            <button
              onClick={() => navigate('/developer/properties')}
              className="text-blue-500 text-sm hover:underline"
            >
              View All
            </button>
          </div>
          
          {properties.length === 0 ? (
            <div className="text-center py-8">
              <Building className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No properties listed yet</p>
              <button
                onClick={() => navigate('/add-property')}
                className="mt-2 text-blue-500 hover:underline"
              >
                Add your first property
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.slice(0, 3).map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}