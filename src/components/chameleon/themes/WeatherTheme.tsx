'use client';

/**
 * WeatherTheme - Weather App Disguise
 *
 * Looks like a typical weather application.
 * Long press on the temperature display triggers the camera.
 *
 * FEATURES:
 * - Current weather display (trigger zone)
 * - Hourly forecast
 * - Weekly forecast
 * - Weather details
 *
 * TRIGGER: Long press (3 seconds) on temperature
 */

import { useState } from 'react';
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  Wind,
  Droplets,
  Eye,
  Thermometer,
  MapPin,
  RefreshCw
} from 'lucide-react';
import { StealthTrigger } from '../StealthTrigger';
import { StealthCamera } from '../StealthCamera';

interface WeatherThemeProps {
  /** Content slug from URL */
  contentSlug: string;
  /** Public key for encryption */
  publicKey: string | null;
  /** Burner link slug */
  burnerSlug: string;
}

// Weather data based on slug
const WEATHER_DATA: Record<string, {
  location: string;
  temp: number;
  condition: string;
  high: number;
  low: number;
  humidity: number;
  wind: number;
  visibility: number;
  feelsLike: number;
  icon: 'sun' | 'cloud' | 'rain' | 'snow';
  hourly: { time: string; temp: number; icon: 'sun' | 'cloud' | 'rain' }[];
  weekly: { day: string; high: number; low: number; icon: 'sun' | 'cloud' | 'rain' | 'snow' }[];
}> = {
  'sunny-forecast': {
    location: 'San Francisco, CA',
    temp: 72,
    condition: 'Sunny',
    high: 78,
    low: 62,
    humidity: 45,
    wind: 8,
    visibility: 10,
    feelsLike: 74,
    icon: 'sun',
    hourly: [
      { time: 'Now', temp: 72, icon: 'sun' },
      { time: '2PM', temp: 75, icon: 'sun' },
      { time: '3PM', temp: 77, icon: 'sun' },
      { time: '4PM', temp: 78, icon: 'sun' },
      { time: '5PM', temp: 76, icon: 'cloud' },
      { time: '6PM', temp: 73, icon: 'cloud' },
    ],
    weekly: [
      { day: 'Today', high: 78, low: 62, icon: 'sun' },
      { day: 'Wed', high: 75, low: 60, icon: 'cloud' },
      { day: 'Thu', high: 72, low: 58, icon: 'rain' },
      { day: 'Fri', high: 70, low: 55, icon: 'rain' },
      { day: 'Sat', high: 73, low: 57, icon: 'cloud' },
      { day: 'Sun', high: 76, low: 60, icon: 'sun' },
      { day: 'Mon', high: 78, low: 62, icon: 'sun' },
    ],
  },
  'cloudy-day': {
    location: 'Seattle, WA',
    temp: 58,
    condition: 'Cloudy',
    high: 62,
    low: 52,
    humidity: 78,
    wind: 12,
    visibility: 8,
    feelsLike: 55,
    icon: 'cloud',
    hourly: [
      { time: 'Now', temp: 58, icon: 'cloud' },
      { time: '2PM', temp: 60, icon: 'cloud' },
      { time: '3PM', temp: 61, icon: 'cloud' },
      { time: '4PM', temp: 62, icon: 'rain' },
      { time: '5PM', temp: 60, icon: 'rain' },
      { time: '6PM', temp: 58, icon: 'cloud' },
    ],
    weekly: [
      { day: 'Today', high: 62, low: 52, icon: 'cloud' },
      { day: 'Wed', high: 58, low: 50, icon: 'rain' },
      { day: 'Thu', high: 55, low: 48, icon: 'rain' },
      { day: 'Fri', high: 60, low: 50, icon: 'cloud' },
      { day: 'Sat', high: 63, low: 52, icon: 'sun' },
      { day: 'Sun', high: 65, low: 54, icon: 'sun' },
      { day: 'Mon', high: 62, low: 52, icon: 'cloud' },
    ],
  },
  'default': {
    location: 'New York, NY',
    temp: 65,
    condition: 'Partly Cloudy',
    high: 70,
    low: 58,
    humidity: 55,
    wind: 10,
    visibility: 10,
    feelsLike: 66,
    icon: 'cloud',
    hourly: [
      { time: 'Now', temp: 65, icon: 'cloud' },
      { time: '2PM', temp: 68, icon: 'sun' },
      { time: '3PM', temp: 70, icon: 'sun' },
      { time: '4PM', temp: 69, icon: 'cloud' },
      { time: '5PM', temp: 66, icon: 'cloud' },
      { time: '6PM', temp: 63, icon: 'cloud' },
    ],
    weekly: [
      { day: 'Today', high: 70, low: 58, icon: 'cloud' },
      { day: 'Wed', high: 72, low: 60, icon: 'sun' },
      { day: 'Thu', high: 68, low: 56, icon: 'rain' },
      { day: 'Fri', high: 65, low: 54, icon: 'cloud' },
      { day: 'Sat', high: 70, low: 58, icon: 'sun' },
      { day: 'Sun', high: 74, low: 62, icon: 'sun' },
      { day: 'Mon', high: 72, low: 60, icon: 'cloud' },
    ],
  },
};

const WeatherIcon = ({ type, size = 'md' }: { type: 'sun' | 'cloud' | 'rain' | 'snow'; size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClass = size === 'lg' ? 'w-20 h-20' : size === 'md' ? 'w-8 h-8' : 'w-5 h-5';

  switch (type) {
    case 'sun':
      return <Sun className={`${sizeClass} text-yellow-400`} />;
    case 'cloud':
      return <Cloud className={`${sizeClass} text-gray-400`} />;
    case 'rain':
      return <CloudRain className={`${sizeClass} text-blue-400`} />;
    case 'snow':
      return <CloudSnow className={`${sizeClass} text-blue-200`} />;
    default:
      return <Sun className={`${sizeClass} text-yellow-400`} />;
  }
};

export function WeatherTheme({ contentSlug, publicKey, burnerSlug }: WeatherThemeProps) {
  const [showCamera, setShowCamera] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Get weather data
  const weather = WEATHER_DATA[contentSlug] || WEATHER_DATA['default'];

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

  // Fake refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white">
      {/* Camera overlay */}
      {showCamera && publicKey && (
        <StealthCamera
          publicKey={publicKey}
          slug={burnerSlug}
          onComplete={handleUploadComplete}
          onClose={handleCameraClose}
          successMessage="Weather data updated!"
        />
      )}

      {/* Weather content */}
      <div className="max-w-lg mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pt-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">{weather.location}</span>
          </div>
          <button
            onClick={handleRefresh}
            className="p-2 rounded-full hover:bg-white/10"
          >
            <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {/* Main weather display - TRIGGER ZONE */}
        <StealthTrigger
          onUnlock={handleUnlock}
          triggerType="longPress"
          longPressDuration={3000}
          className="text-center mb-8"
        >
          <div className="flex flex-col items-center">
            <WeatherIcon type={weather.icon} size="lg" />
            <div className="text-8xl font-light mt-4 select-none">
              {weather.temp}°
            </div>
            <div className="text-xl opacity-90 mt-2">{weather.condition}</div>
            <div className="text-sm opacity-75 mt-1">
              H: {weather.high}° L: {weather.low}°
            </div>
          </div>
        </StealthTrigger>

        {/* Hourly forecast */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-4">
          <h3 className="text-sm font-medium opacity-75 mb-3">HOURLY FORECAST</h3>
          <div className="flex justify-between overflow-x-auto">
            {weather.hourly.map((hour, index) => (
              <div key={index} className="flex flex-col items-center min-w-[60px]">
                <span className="text-sm opacity-75">{hour.time}</span>
                <div className="my-2">
                  <WeatherIcon type={hour.icon} size="sm" />
                </div>
                <span className="font-medium">{hour.temp}°</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly forecast */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-4">
          <h3 className="text-sm font-medium opacity-75 mb-3">7-DAY FORECAST</h3>
          <div className="space-y-3">
            {weather.weekly.map((day, index) => (
              <div key={index} className="flex items-center">
                <span className="w-12 font-medium">{day.day}</span>
                <div className="flex-1 flex items-center justify-center">
                  <WeatherIcon type={day.icon} size="sm" />
                </div>
                <div className="w-24 flex justify-end gap-2">
                  <span className="font-medium">{day.high}°</span>
                  <span className="opacity-50">{day.low}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
            <div className="flex items-center gap-2 opacity-75 mb-1">
              <Thermometer className="w-4 h-4" />
              <span className="text-sm">FEELS LIKE</span>
            </div>
            <div className="text-2xl font-medium">{weather.feelsLike}°</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
            <div className="flex items-center gap-2 opacity-75 mb-1">
              <Droplets className="w-4 h-4" />
              <span className="text-sm">HUMIDITY</span>
            </div>
            <div className="text-2xl font-medium">{weather.humidity}%</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
            <div className="flex items-center gap-2 opacity-75 mb-1">
              <Wind className="w-4 h-4" />
              <span className="text-sm">WIND</span>
            </div>
            <div className="text-2xl font-medium">{weather.wind} mph</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
            <div className="flex items-center gap-2 opacity-75 mb-1">
              <Eye className="w-4 h-4" />
              <span className="text-sm">VISIBILITY</span>
            </div>
            <div className="text-2xl font-medium">{weather.visibility} mi</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherTheme;
