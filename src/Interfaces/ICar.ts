export default interface ICar {
  id?: string | undefined;
  model: string;
  year: number;
  color: string;
  status: boolean;
  buyValue: number;
  doorQty: number;
  seatsQty: number;
}