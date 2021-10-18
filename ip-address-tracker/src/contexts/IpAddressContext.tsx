import React, { createContext } from "react";

interface IPResponse {
  location: {
    region: string;
    city: string;
    timezone: string;
    lat: number;
    lng: number;
    geonameId: number;
  };
  ip: string;
  isp: string;
}

interface context {
  response: IPResponse | null;
  handleIPAddress: (ip: string) => void;
  loading: boolean;
}
export const IpAddressContext = createContext<context>({
  response: {
    location: {
      region: "--",
      city: "--",
      timezone: "--",
      lat: 0,
      lng: 0,
      geonameId: 0,
    },
    ip: "--",
    isp: "--",
  },
  handleIPAddress: (ip) => {
    ip;
  },
  loading: false,
});
// export const IpAddressContext = createContext<context | null>(null);
