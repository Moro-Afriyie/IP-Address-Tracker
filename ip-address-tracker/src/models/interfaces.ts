export interface IPResponse {
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

export interface IContext {
  response: IPResponse | null;
  handleIPAddress: (ip: string) => void;
  loading: boolean;
}
