import React, { createContext } from "react";

interface IPResponse {
  location: {
    country: string;
    region: string;
    timezone: string;
  };
  ip: string;
  isp: string;
}
// export const IpAddressContext = createContext<IPResponse | null>(null);
export const IpAddressContext = createContext({});
