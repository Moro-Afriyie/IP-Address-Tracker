import React, { createContext } from "react";

interface IPResponse {
  location: {
    region: string;
    city: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  ip: string;
  isp: string;
}

interface context {
  response: IPResponse | null;
  handleIPAddress: (ip: string) => void;
  lat: number;
  lng: number;
}
export const IpAddressContext = createContext<context>({
  response: {
    location: {
      region: "--",
      city: "--",
      timezone: "--",
      lat: 0,
      lng: 0,
    },
    ip: "--",
    isp: "--",
  },
  handleIPAddress: (ip) => {
    ip;
  },
  lat: 0,
  lng: 0,
});
// export const IpAddressContext = createContext<context | null>(null);
