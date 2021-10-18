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
