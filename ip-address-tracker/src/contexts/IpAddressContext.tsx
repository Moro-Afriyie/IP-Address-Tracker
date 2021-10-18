import { createContext } from "react";
import { IPResponse } from "../models/interfaces";

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
