"use client"; 

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./Map"), { ssr: false });

import { Store } from "@/types";

type MapWrapperProps = {
  center: [number, number];
  stores: Store[];
};

export default function MapWrapper({ center, stores }: MapWrapperProps) {
  return <DynamicMap center={center} stores={stores} />;
}
