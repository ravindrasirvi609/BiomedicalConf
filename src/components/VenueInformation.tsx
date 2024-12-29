"use client";
import React, { useState } from "react";
import { MapPin, Building, Plane, Car, Calendar } from "lucide-react";
import Image from "next/image";

const VenueInformation = () => {
  const [activeTab, setActiveTab] = useState("venue");

  const venueDetails = {
    venue: {
      name: "Hotel Gem Park,Ooty",
      address: "Sheddon Rd, Pudumund, Ooty, Tamil Nadu 643001",
      capacity: "200 attendees",
      features: [
        "State-of-the-art conference halls",
        "Advanced medical technology integration",
        "Multiple breakout session rooms",
        "High-speed internet connectivity",
      ],
      icon: <Building color="#9C6FDE" size={48} />,
    },
    accommodation: {
      hotels: [
        {
          name: "Hotel Gem Park - Deluxe Room",
          category: "Deluxe Room",
          prices: {
            single: "₹ 8000*",
            double: "₹ 9500*",
            triple: "₹ 11500**",
          },
        },
        {
          name: "Fortune Resort Sullivan Court",
          category: "Member ITC's Hotel Group",
          prices: {
            single: "₹ 8000*",
            double: "₹ 9500*",
            triple: "₹ 11500**",
          },
        },
        {
          name: "The Monarch Hotel - Premier Rooms",
          category: "Premier Rooms",
          prices: {
            single: "₹ 6499**",
            double: "₹ 6999*",
          },
        },
      ],
    },
    travel: {
      airport: {
        name: "Coimbatore International Airport",
        distance: "88 kilometers from venue",
        transportation: [
          "Airport shuttle service",
          "Taxi and ride-share available",
          "Car rental services on-site",
        ],
        icon: <Plane color="#FF6B9E" size={48} />,
      },
      parking: {
        availability: "Ample parking space",
        rates: "Conference special rates available",
        type: "Secure underground parking",
        icon: <Car color="#9C6FDE" size={48} />,
      },
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "venue":
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                {venueDetails.venue.icon}
                <h3 className="ml-4 text-2xl font-bold text-gray-800">
                  {venueDetails.venue.name}
                </h3>
              </div>
              <div className="space-y-4">
                <p className="flex items-center text-gray-800">
                  <MapPin className="mr-3 text-[#9C6FDE]" />
                  {venueDetails.venue.address}
                </p>
                <p className="flex items-center text-gray-800">
                  <Calendar className="mr-3 text-[#FF6B9E]" />
                  Capacity: {venueDetails.venue.capacity}
                </p>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-800">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {venueDetails.venue.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/Hotel Entrance.jpg"
                alt="Venue"
                className="rounded-2xl shadow-xl object-cover w-full h-96"
                width={500}
                height={400}
              />
            </div>
          </div>
        );
      case "accommodation":
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venueDetails.accommodation.hotels.map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-gray-600">{hotel.category}</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center text-gray-700 mb-3">
                    <span className="font-medium">Single Occupancy:</span>
                    <span className="font-semibold">{hotel.prices.single}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-700 mb-3">
                    <span className="font-medium">Double Occupancy:</span>
                    <span className="font-semibold">{hotel.prices.double}</span>
                  </div>
                  {hotel.prices.triple && (
                    <div className="flex justify-between items-center text-gray-700">
                      <span className="font-medium">Triple Occupancy:</span>
                      <span className="font-semibold">
                        {hotel.prices.triple}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <button className="w-full bg-[#FF6B9E] text-white py-2 rounded-lg font-medium hover:bg-[#e05f8d] transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      case "travel":
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                {venueDetails.travel.airport.icon}
                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                  Airport Information
                </h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center">
                  <MapPin className="mr-3 text-[#9C6FDE]" />
                  {venueDetails.travel.airport.name}
                </p>
                <p className="flex items-center">
                  <Car className="mr-3 text-[#FF6B9E]" />
                  Distance: {venueDetails.travel.airport.distance}
                </p>
                <div>
                  <h4 className="font-semibold mb-2">
                    Transportation Options:
                  </h4>
                  <ul className="list-disc list-inside">
                    {venueDetails.travel.airport.transportation.map(
                      (option, index) => (
                        <li key={index}>{option}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                {venueDetails.travel.parking.icon}
                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                  Parking Information
                </h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center">
                  <MapPin className="mr-3 text-[#FF6B9E]" />
                  {venueDetails.travel.parking.availability}
                </p>
                <p className="flex items-center">
                  <Car className="mr-3 text-[#9C6FDE]" />
                  {venueDetails.travel.parking.type}
                </p>
                <p className="bg-[#FF6B9E]/10 text-[#FF6B9E] px-3 py-2 rounded-full inline-block">
                  {venueDetails.travel.parking.rates}
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#9C6FDE]/10 to-[#FF6B9E]/10 flex flex-col justify-center items-center p-8"
      id="Accomodation"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#9C6FDE] to-[#FF6B9E]">
          Venue & Travel Information
        </h2>

        <div className="flex justify-center mb-12">
          {["venue", "accommodation", "travel"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6 py-3 mx-2 rounded-full font-semibold transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#9C6FDE] to-[#FF6B9E] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default VenueInformation;
