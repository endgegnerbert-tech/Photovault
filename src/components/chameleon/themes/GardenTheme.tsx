'use client';

/**
 * GardenTheme - Plant Care App Disguise
 *
 * Looks like a plant care/gardening application.
 * Tap the plant image 5 times to trigger the camera.
 *
 * FEATURES:
 * - Plant hero image (trigger zone)
 * - Plant name and description
 * - Care instructions
 * - Watering schedule
 * - Growth tips
 *
 * TRIGGER: 5 taps on the plant image
 */

import { useState } from 'react';
import { Droplets, Sun, Thermometer, Wind, Calendar, Bell, Leaf, Heart } from 'lucide-react';
import { StealthTrigger } from '../StealthTrigger';
import { StealthCamera } from '../StealthCamera';

interface GardenThemeProps {
  /** Content slug from URL */
  contentSlug: string;
  /** Public key for encryption */
  publicKey: string | null;
  /** Burner link slug */
  burnerSlug: string;
}

// Plant data based on slug
const PLANTS: Record<string, {
  name: string;
  scientificName: string;
  description: string;
  image: string;
  difficulty: 'Easy' | 'Moderate' | 'Expert';
  water: string;
  light: string;
  temperature: string;
  humidity: string;
  nextWater: string;
  careInstructions: string[];
  tips: string[];
}> = {
  'monstera-care': {
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    description: 'The Swiss Cheese Plant is famous for its quirky natural leaf holes. A stunning tropical beauty that brings instant jungle vibes to any space.',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&h=600&fit=crop',
    difficulty: 'Easy',
    water: 'Every 1-2 weeks',
    light: 'Bright indirect',
    temperature: '65-85°F',
    humidity: '60-80%',
    nextWater: 'In 3 days',
    careInstructions: [
      'Water when top 2 inches of soil are dry',
      'Wipe leaves regularly to remove dust',
      'Provide support as it grows (moss pole)',
      'Rotate plant monthly for even growth',
      'Repot every 2 years in spring',
    ],
    tips: [
      'Yellow leaves = overwatering',
      'Brown edges = needs more humidity',
      'No new holes = needs more light',
      'Aerial roots are normal and healthy',
    ],
  },
  'succulent-guide': {
    name: 'Echeveria',
    scientificName: 'Echeveria elegans',
    description: 'A beautiful rosette-shaped succulent known for its powdery blue-green leaves. Perfect for beginners and requires minimal care.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&h=600&fit=crop',
    difficulty: 'Easy',
    water: 'Every 2-3 weeks',
    light: 'Full sun to bright',
    temperature: '50-80°F',
    humidity: '30-40%',
    nextWater: 'In 5 days',
    careInstructions: [
      'Use well-draining soil (cactus mix)',
      'Water only when completely dry',
      'Never let water sit in rosette',
      'Provide 4-6 hours of sunlight',
      'Reduce watering in winter',
    ],
    tips: [
      'Stretched plant = needs more light',
      'Soft leaves = overwatered',
      'Easily propagated from leaves',
      'Offsets (babies) can be separated',
    ],
  },
  'default': {
    name: 'Peace Lily',
    scientificName: 'Spathiphyllum',
    description: 'An elegant flowering plant that purifies air and thrives in low light. Perfect for offices and bedrooms.',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=800&h=600&fit=crop',
    difficulty: 'Easy',
    water: 'Weekly',
    light: 'Low to medium',
    temperature: '65-80°F',
    humidity: '50-60%',
    nextWater: 'Tomorrow',
    careInstructions: [
      'Keep soil consistently moist',
      'Avoid direct sunlight',
      'Mist leaves regularly',
      'Remove yellow or brown leaves',
      'Fertilize monthly in growing season',
    ],
    tips: [
      'Drooping = needs water (recovers quickly)',
      'Brown tips = chlorine in water, use filtered',
      'Blooms in adequate light',
      'Toxic to pets - keep out of reach',
    ],
  },
};

const DifficultyBadge = ({ level }: { level: 'Easy' | 'Moderate' | 'Expert' }) => {
  const colors = {
    Easy: 'bg-green-100 text-green-700',
    Moderate: 'bg-yellow-100 text-yellow-700',
    Expert: 'bg-red-100 text-red-700',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[level]}`}>
      {level}
    </span>
  );
};

export function GardenTheme({ contentSlug, publicKey, burnerSlug }: GardenThemeProps) {
  const [showCamera, setShowCamera] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [notificationsOn, setNotificationsOn] = useState(true);

  // Get plant data
  const plant = PLANTS[contentSlug] || PLANTS['default'];

  // Handle unlock (show camera)
  const handleUnlock = () => {
    if (publicKey) {
      setShowCamera(true);
    }
  };

  // Handle camera close
  const handleCameraClose = () => {
    setShowCamera(false);
  };

  // Handle upload complete
  const handleUploadComplete = () => {
    setShowCamera(false);
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* Camera overlay */}
      {showCamera && publicKey && (
        <StealthCamera
          publicKey={publicKey}
          slug={burnerSlug}
          onComplete={handleUploadComplete}
          onClose={handleCameraClose}
          successMessage="Photo added to plant journal!"
        />
      )}

      {/* Plant content */}
      <div className="max-w-2xl mx-auto">
        {/* Hero image with stealth trigger (5 taps) */}
        <StealthTrigger
          onUnlock={handleUnlock}
          triggerType="tripleTap"
          tapCount={5}
          className="w-full"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <DifficultyBadge level={plant.difficulty} />
            </div>
          </div>
        </StealthTrigger>

        {/* Plant info */}
        <div className="p-4">
          {/* Title and actions */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{plant.name}</h1>
              <p className="text-green-600 italic">{plant.scientificName}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <Heart
                  className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                />
              </button>
              <button
                onClick={() => setNotificationsOn(!notificationsOn)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <Bell
                  className={`w-6 h-6 ${notificationsOn ? 'text-green-600' : 'text-gray-400'}`}
                />
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">{plant.description}</p>

          {/* Next watering reminder */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Droplets className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Water Reminder</p>
              <p className="text-blue-600">{plant.nextWater}</p>
            </div>
          </div>

          {/* Care requirements grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <Droplets className="w-4 h-4" />
                <span className="text-sm">Water</span>
              </div>
              <p className="font-medium text-gray-900">{plant.water}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <Sun className="w-4 h-4" />
                <span className="text-sm">Light</span>
              </div>
              <p className="font-medium text-gray-900">{plant.light}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <Thermometer className="w-4 h-4" />
                <span className="text-sm">Temperature</span>
              </div>
              <p className="font-medium text-gray-900">{plant.temperature}</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <Wind className="w-4 h-4" />
                <span className="text-sm">Humidity</span>
              </div>
              <p className="font-medium text-gray-900">{plant.humidity}</p>
            </div>
          </div>

          {/* Care instructions */}
          <div className="mb-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
              <Calendar className="w-5 h-5 text-green-600" />
              Care Instructions
            </h2>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <ul className="space-y-3">
                {plant.careInstructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-700 text-sm font-medium">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pro tips */}
          <div className="mb-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
              <Leaf className="w-5 h-5 text-green-600" />
              Pro Tips
            </h2>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <ul className="space-y-2">
                {plant.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-500 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GardenTheme;
