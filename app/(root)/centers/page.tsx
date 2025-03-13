import React from "react";
import { Store } from "@/types";
import MapWrapper from "@/components/MapWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/shared/home/hero-section";
import { HoverBottomSection } from "@/components/shared/home/hover-bottom-section";
import { CenterHeroSection } from "./center-hero-section";

const stores: Store[] = [
    { 
      id: 1, 
      name: "IGIFT HEAD OFFICE", 
      address: "Unit 2F-9, The Galleria, Pacencia Tijam Pison Avenue, San Rafael, Mandurriao, Iloilo City", 
      mobile: "+639173051000",
      officeHours: "9:00 AM - 6:00 PM",
      businessDays: "Monday - Saturday",
      coordinates: [10.7045969975958, 122.55088046417464] 
    },
    { 
      id: 2, 
      name: "IGIFT STA. ROSA, LAGUNA", 
      address: "Phase 2 Block 6 Lot 64 Lakeville Subdivision, Sinalhan, Sta. Rosa, Laguna", 
      mobile: "09636899508",
      officeHours: "9:00 AM - 6:00 PM",
      businessDays: "Monday - Saturday",
      coordinates: [14.2956, 121.0977] // Approximate location of Lakeville Subdivision, Sinalhan, Sta. Rosa, Laguna
    },
    { 
      id: 3, 
      name: "IGIFT BATANGAS", 
      address: "Purok 1, Brgy. Canda, Balayan, Batangas", 
      mobile: "09663340573",
      officeHours: "9:00 AM - 6:00 PM",
      businessDays: "Monday - Saturday",
      coordinates: [13.964036049188895, 120.6936263000169] // Coordinates for Brgy. Canda, Balayan, Batangas
    },
    { 
      id: 4, 
      name: "IGIFT PONTEVEDRA, CAPIZ", 
      address: "Andaya Subdivision, Brgy.Tacas, Pontevedra, Capiz", 
      mobile: "09176330179",
      officeHours: "9:00 AM - 6:00 PM",
      businessDays: "Monday - Saturday",
      coordinates: [11.5000, 122.8333] // Approximate location of Pontevedra, Capiz
    },
    { 
      id: 5, 
      name: "IGIFT HONGKONG", 
      address: "Bel-Air On The Peak, Pok Fu Lam, Hongkong", 
      mobile: "+85292403546",
      officeHours: "9:00 AM - 6:00 PM",
      businessDays: "Sunday",
      coordinates: [22.255202013893353, 114.13308965753045] // Approximate location of Pokfulam, Hong Kong
    },
    { 
      id: 6, 
      name: "IGIFT CABIAO, NUEVA ECIJA", 
      address: "00194 Guapito Street Santa Rita Cabiao Nueva Ecija", 
      mobile: "09053266329",
      officeHours: "9:00 AM - 6:00 PM",
      businessDays: "Monday - Saturday",
      coordinates: [15.2456, 120.8547] // Approximate location of Santa Rita, Cabiao, Nueva Ecija
    },
    { 
      id: 7, 
      name: "IGIFT AKLAN", 
      address: "Cabilawan, Madalag, Aklan", 
      mobile: "09634632565",
      officeHours: "9:00 AM - 6:00 PM",
      businessDays: "Monday - Saturday",
      coordinates: [11.7167, 122.2833] // Approximate location of Madalag, Aklan
    },
    { 
      id: 8, 
      name: "IGIFT LIPA, BATANGAS", 
      address: "P1 B2 L6 APPLE ST. AMIYA ROSA SUBD. BOLBOK, LIPA CITY, BATANGAS", 
      mobile: "09563084857",
      officeHours: "9:00 AM - 6:00 PM",
      businessDays: "Monday - Saturday",
      coordinates: [13.9415, 121.1631] // Approximate location of Bolbok, Lipa City, Batangas
    },
    { 
      id: 9, 
      name: "IGIFT MALATE, MANILA", 
      address: "2424 2F Torre Lorenzo Condominium, Taft Avenue, Brgy 727, Malate, Manila", 
      mobile: "09452647632",
      officeHours: "9:00 AM - 6:00 PM",
      businessDays: "Monday - Saturday",
      coordinates: [14.5701, 120.9888] // Approximate location of Torre Lorenzo Condominium, Taft Avenue, Malate, Manila
    },
    { 
      id: 10, 
      name: "IGIFT CATANDUANES", 
      address: "Paraiso, San Miguel, Catanduanes", 
      mobile: "09467546670",
      officeHours: "9:00 AM - 6:00 PM",
      businessDays: "Monday - Saturday",
      coordinates: [13.763247866500496, 124.26142051652218]
    },
    { 
        id: 11, 
        name: "IGIFT UGANDA", 
        address: "Kampala, Uganda", 
        mobile: "09467546670",
        officeHours: "9:00 AM - 6:00 PM",
        businessDays: "Monday - Saturday",
        coordinates: [0.31680551945249635, 32.57577535864757]
      },
      { 
        id: 12, 
        name: "IGIFT LAGUNA", 
        address: "C/O P1 B2 L6 APPLE ST. AMIYA ROSA SUBD. BOLBOK, LIPA CITY, BATANGAS", 
        mobile: "09563084857",
        officeHours: "9:00 AM - 6:00 PM",
        businessDays: "Monday - Saturday",
        coordinates: [13.9415, 121.1631] // Approximate location of Bolbok, Lipa City, Batangas
      },
      { 
        id: 13, 
        name: "IGIFT CAVITE", 
        address: "C/O P1 B2 L6 APPLE ST. AMIYA ROSA SUBD. BOLBOK, LIPA CITY, BATANGAS", 
        mobile: "09563084857",
        officeHours: "9:00 AM - 6:00 PM",
        businessDays: "Monday - Saturday",
        coordinates: [13.9415, 121.1631] // Approximate location of Bolbok, Lipa City, Batangas
      },
      { 
        id: 14, 
        name: "IGIFT PUERTO PRINCESA, PALAWAN", 
        address: "30 BM Road San Pedro, Puerto Princesa City, Palawan", 
        mobile: "09098126147",
        officeHours: "9:00 AM - 6:00 PM",
        businessDays: "Sunday - Friday",
        coordinates: [9.76517801694127, 118.7654907382492] // Approximate location of San Pedro, Puerto Princesa City, Palawan
      },
  ];
  

export default function CenterList() {
    const defaultCenter: [number, number] = [10.7045969975958, 122.55088046417464];

  return (
  <>
  <CenterHeroSection />
    <Card className="max-w-5xl mx-auto border-gold border">
    <CardContent className="p-4">
    <div>
      <MapWrapper center={defaultCenter} stores={stores} />
    </div>
    </CardContent>
    </Card>
    <HoverBottomSection />
    </>
  );
}
