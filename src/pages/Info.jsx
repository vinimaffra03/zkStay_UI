import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { saoPauloListings, florianopolisListings } from "./Home.jsx";
import { Header } from "../components/Header/index.jsx";
import {
  Star,
  ArrowLeft,
  MapPin,
  Wifi,
  Car,
  Dumbbell,
  Coffee,
} from "lucide-react";

export default function Info() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Combina ambos os arrays e busca o listing específico pelo ID
  const allListings = [...saoPauloListings, ...florianopolisListings];
  const listing = allListings.find((item) => item.id === parseInt(id));

  // Determina a cidade baseada no ID
  const isFlorianopolis = florianopolisListings.some(
    (item) => item.id === parseInt(id)
  );
  const cityName = isFlorianopolis ? "Florianópolis" : "São Paulo";

  // Se não encontrar o listing, redireciona para home
  if (!listing) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-6xl mx-auto px-6 lg:px-20 py-8">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        {/* Main layout */}
        <div>
          {/* Main image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden mb-6">
            <img
              src={listing.image}
              alt={listing.type}
              className="w-full h-full object-cover"
            />
            {/* Image badge */}
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              1/90
            </div>
          </div>

          {/* Information card below the image */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {listing.type}
            </h1>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <MapPin className="w-4 h-4" />
              <span>{cityName}, Brazil</span>
            </div>

            {/* Basic details */}
            <div className="text-gray-600 mb-4">
              <p>Entire place • 2 guests • 1 bedroom • 1 bed • 1 bathroom</p>
            </div>

            {/* Rating and reviews */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-black" />
                  <span className="font-medium">{listing.rating}</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-600">
                  <span className="text-sm">🏆</span>
                  <span className="text-sm">Guest favorite</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">22 reviews</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="line-through text-gray-500">R$490</span>
                <span className="text-2xl font-bold text-gray-900">
                  {listing.price}
                </span>
              </div>
              <p className="text-sm text-gray-600">for 2 nights • Dec 12-14</p>
            </div>

            {/* Free cancellation */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm text-gray-600">Free cancellation</span>
            </div>

            {/* Reserve button */}
            <button className="w-full bg-black hover:bg-gray-800 text-white py-4 px-6 rounded-xl font-medium text-lg transition-colors duration-200">
              Reserve
            </button>
          </div>
        </div>

        {/* Amenities section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Wifi className="w-5 h-5 text-gray-700" />
              <span className="text-sm">Free Wi-Fi</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Car className="w-5 h-5 text-gray-700" />
              <span className="text-sm">Parking</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Dumbbell className="w-5 h-5 text-gray-700" />
              <span className="text-sm">Gym</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Coffee className="w-5 h-5 text-gray-700" />
              <span className="text-sm">Breakfast</span>
            </div>
          </div>
        </div>

        {/* Description section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">About this place</h2>
          <p className="text-gray-700 leading-relaxed">
            Comfortable accommodation well located in {cityName}. This space
            offers all the necessary amenities for a pleasant stay, with easy
            access to public transportation and main tourist attractions in the
            city. Perfect for travelers seeking comfort and convenience.
          </p>
        </div>
      </main>
    </div>
  );
}
