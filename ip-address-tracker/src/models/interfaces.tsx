export interface IPResponse {
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

// export interface ContextInterface extends IPResponse {
//   response: IPResponse | null;
//   handleIPAddress: (ip: string) => void;
// }
