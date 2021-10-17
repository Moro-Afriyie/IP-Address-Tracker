import React, { createContext } from "react";

interface IPResponse {
  location: {
    country: string;
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
}
export const IpAddressContext = createContext<context>({
  response: {
    location: {
      country: "",
      city: "",
      timezone: "",
      lat: 0,
      lng: 0,
    },
    ip: "",
    isp: "",
  },
  handleIPAddress: (ip) => {
    ip;
  },
});
