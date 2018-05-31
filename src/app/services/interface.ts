export interface IPlatform {
    id: number;
    name: string;
  }

  export interface ISeason {
    seasonId: number;
    startedOn: number;
    endedOn?: number;
  }

  export interface IPlaylist {
    id: number;
    platformId: number;
    name: string;
    population: Population;
  }
  
  export interface Population {
    players: number;
    updatedAt: number;
  }