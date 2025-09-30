import React, { useState } from "react";
import {
  Heart,
  Globe,
  Menu,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

// Logo Component
const Logo = () => (
  <div className="flex items-center gap-1">
    <span className="text-2xl font-semibold text-gray-500">
      <strong>zk</strong>Stay
    </span>
  </div>
);

// Navigation removida

// User Menu Component
const UserMenu = () => {
  const UserIcon = () => (
    <a href="/login">
      <svg
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </a>
  );

  return (
    <div className="flex items-center gap-4">
      <button className="hidden lg:block px-4 py-3 hover:bg-gray-50 rounded-full transition-colors font-medium">
        Become a host
      </button>
      <button className="p-3 hover:bg-gray-50 rounded-full transition-colors">
        <Globe className="w-5 h-5" />
      </button>
      <button className="flex items-center gap-2 p-2 pl-3 border border-gray-300 rounded-full hover:shadow-md transition-shadow">
        <Menu className="w-4 h-4" />
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
          <UserIcon />
        </div>
      </button>
    </div>
  );
};

// Search removido

// Header Component
const Header = () => (
  <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-20">
      <div className="flex items-center justify-between py-4">
        <Logo />
        <UserMenu />
      </div>
    </div>
  </header>
);

// Listing Card Component
const ListingCard = ({ listing, isFavorite, onToggleFavorite }) => (
  <div className="flex-shrink-0 w-72 group cursor-pointer">
    <div className="relative rounded-xl overflow-hidden mb-3">
      <img
        src={listing.image}
        alt={listing.type}
        className="w-full h-72 object-cover"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          onToggleFavorite(listing.id);
        }}
        className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/90 transition-colors"
      >
        <Heart
          className={`w-6 h-6 ${
            isFavorite
              ? "fill-red-500 stroke-red-500"
              : "fill-black/50 stroke-white"
          }`}
        />
      </button>
      <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium">
        Guest favorite
      </div>
    </div>
    <div className="px-1">
      <div className="flex justify-between items-start mb-1">
        <p className="font-medium text-gray-900">{listing.type}</p>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-black" />
          <span className="text-sm">{listing.rating}</span>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-1">2 nights</p>
      <p className="text-gray-900">
        <span className="font-semibold">{listing.price}</span> for 2 nights
      </p>
    </div>
  </div>
);

// Section Navigation Buttons Component
const SectionNavigation = () => (
  <div className="flex gap-2">
    <button className="p-2 border border-gray-300 rounded-full hover:shadow-md transition-shadow disabled:opacity-50">
      <ChevronLeft className="w-5 h-5" />
    </button>
    <button className="p-2 border border-gray-300 rounded-full hover:shadow-md transition-shadow">
      <ChevronRight className="w-5 h-5" />
    </button>
  </div>
);

// Listings Section Component
const ListingsSection = ({ title, listings, favorites, onToggleFavorite }) => (
  <div className="mb-12">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <SectionNavigation />
    </div>
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {listings.map((listing) => (
        <ListingCard
          key={listing.id}
          listing={listing}
          isFavorite={favorites[listing.id]}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  </div>
);

// Main App Component
export default function Home() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const saoPauloListings = [
    {
      id: 1,
      type: "Apartment in República",
      price: "R$265",
      rating: "4.99",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      type: "Room in Jardim Paulista",
      price: "R$194",
      rating: "4.93",
      image:
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      type: "Apartment near Campo Belo Station",
      price: "R$458",
      rating: "4.95",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      type: "Apartment near Campo Belo Station",
      price: "R$449",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      type: "Room in São Paulo",
      price: "R$192",
      rating: "4.98",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      type: "Apartment in Liberdade",
      price: "R$341",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=400&h=300&fit=crop",
    },
    {
      id: 7,
      type: "Room in Bela Vista",
      price: "R$268",
      rating: "4.97",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop",
    },
  ];

  const florianopolisListings = [
    {
      id: 8,
      type: "Room in Córrego Grande",
      price: "R$183",
      rating: "4.92",
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
    },
    {
      id: 9,
      type: "Loft in Pantanal",
      price: "R$288",
      rating: "4.96",
      image:
        "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=400&h=300&fit=crop",
    },
    {
      id: 10,
      type: "Apartment in Centro",
      price: "R$377",
      rating: "4.96",
      image:
        "https://images.unsplash.com/photo-1522050212171-61b01dd24579?w=400&h=300&fit=crop",
    },
    {
      id: 11,
      type: "Condominium in Saco dos Limões",
      price: "R$503",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400&h=300&fit=crop",
    },
    {
      id: 12,
      type: "House in Campeche",
      price: "R$318",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=400&h=300&fit=crop",
    },
    {
      id: 13,
      type: "Shared room in Barra da Lagoa",
      price: "R$141",
      rating: "4.81",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    },
    {
      id: 14,
      type: "Room in Centro",
      price: "R$272",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-screen-2xl mx-auto px-6 lg:px-20 py-8">
        <ListingsSection
          title="Most searched accommodations"
          listings={saoPauloListings}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
        <ListingsSection
          title="Available in Florianópolis this weekend"
          listings={florianopolisListings}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </main>
    </div>
  );
}
