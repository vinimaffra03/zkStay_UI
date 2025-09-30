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
        {/* Botão de voltar */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>

        {/* Layout principal */}
        <div>
          {/* Imagem principal */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden mb-6">
            <img
              src={listing.image}
              alt={listing.type}
              className="w-full h-full object-cover"
            />
            {/* Badge de imagem */}
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              1/90
            </div>
          </div>

          {/* Card de informações abaixo da imagem */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            {/* Título */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {listing.type}
            </h1>

            {/* Localização */}
            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <MapPin className="w-4 h-4" />
              <span>{cityName}, Brasil</span>
            </div>

            {/* Detalhes básicos */}
            <div className="text-gray-600 mb-4">
              <p>
                Espaço inteiro • 2 hóspedes • 1 quarto • 1 cama • 1 banheiro
              </p>
            </div>

            {/* Rating e reviews */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-black" />
                  <span className="font-medium">{listing.rating}</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-600">
                  <span className="text-sm">🏆</span>
                  <span className="text-sm">Preferido dos hóspedes</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">22 avaliações</span>
                </div>
              </div>
            </div>

            {/* Preço */}
            <div className="mb-4">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="line-through text-gray-500">R$490</span>
                <span className="text-2xl font-bold text-gray-900">
                  {listing.price}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                por 2 noites • 12-14 de dez.
              </p>
            </div>

            {/* Cancelamento gratuito */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm text-gray-600">
                Cancelamento gratuito
              </span>
            </div>

            {/* Botão de reserva */}
            <button className="w-full bg-black-500 hover:bg-black-600 text-white py-4 px-6 rounded-xl font-medium text-lg transition-colors duration-200">
              Reservar
            </button>
          </div>
        </div>

        {/* Seção de amenidades */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">
            O que este lugar oferece
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Wifi className="w-5 h-5 text-gray-700" />
              <span className="text-sm">Wi-Fi gratuito</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Car className="w-5 h-5 text-gray-700" />
              <span className="text-sm">Estacionamento</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Dumbbell className="w-5 h-5 text-gray-700" />
              <span className="text-sm">Academia</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Coffee className="w-5 h-5 text-gray-700" />
              <span className="text-sm">Café da manhã</span>
            </div>
          </div>
        </div>

        {/* Seção de descrição */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Sobre este lugar</h2>
          <p className="text-gray-700 leading-relaxed">
            Acomodação confortável e bem localizada em São Paulo. Este espaço
            oferece todas as comodidades necessárias para uma estadia agradável,
            com fácil acesso ao transporte público e principais pontos
            turísticos da cidade. Perfeito para viajantes que buscam conforto e
            praticidade.
          </p>
        </div>
      </main>
    </div>
  );
}
