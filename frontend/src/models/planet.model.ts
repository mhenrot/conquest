import { Planet } from '@/interfaces/planet';

export default class PlanetModel {
  name: string;
  x: number;
  y: number;
  ship: number;
  built: number;

  constructor(rawData: Planet) {
    this.name = rawData.name;
    this.x = rawData.x;
    this.y = rawData.y;
    this.built = Math.floor(Math.random() * 5) + 5;
    this.ship = this.built;
  }
}
