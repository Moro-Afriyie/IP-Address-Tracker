import { createContext } from "react";
import { IContext } from "../models/interfaces";

export const IpAddressContext = createContext<IContext>({
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
