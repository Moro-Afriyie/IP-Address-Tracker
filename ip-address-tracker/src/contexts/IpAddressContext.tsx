import React, { createContext } from "react";

interface IPResponse {
  location: {
    country: string;
    region: string;
    timezone: string;
    lat?: number;
    lng?: number;
  };
  ip: string;
  isp: string;
}

interface context {
  response: IPResponse | null;
  handleIPAddress: (ip: string) => void;
}
export const IpAddressContext = createContext<context | null>(null);
