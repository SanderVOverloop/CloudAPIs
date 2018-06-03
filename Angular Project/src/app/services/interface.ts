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
    population: IPopulation;
  }
  
  export interface IPopulation {
    players: number;
    updatedAt: number;
  }

  export interface IGames {
    id: number;
    name: string;
    developer: IDevelopers;
    genre: string;
  }
  
  export interface IDevelopers {
    id: number;
    name: string;
  }

  export interface ILeaderboard {
    uniqueId: string;
    displayName: string;
    platform: IPlatform;
    avatar?: string;
    profileUrl: string;
    signatureUrl: string;
    stats: IStats;
    rankedSeasons: IRankedSeasons;
    lastRequested: number;
    createdAt: number;
    updatedAt: number;
    nextUpdateAt: number;
  }
  
  export interface IRankedSeasons {
    '7'?: _7;
    '8'?: _7;
    '5'?: _7;
    '6'?: _7;
    '2'?: _2;
    '3'?: _2;
    '4'?: _7;
  }

  export interface _2 {
    '10': _10;
    '11': _10;
    '12': _10;
    '13': _10;
  }
  
  export interface _7 {
    '10': _10;
    '11': _10;
    '13': _10;
    '12'?: _10;
  }
  
  export interface _8 {
    '10': _10;
  }
  
  export interface _10 {
    rankPoints: number;
    matchesPlayed: number;
    tier: number;
    division: number;
  }
  
  export interface IStats {
    wins: number;
    goals: number;
    mvps: number;
    saves: number;
    shots: number;
    assists: number;
  }

  export interface ITier {
    tierId: number;
    tierName: string;
  }

  export interface IPlayer {
    page: number;
    results: number;
    totalResults: number;
    maxResultsPerPage: number;
    data: IDatum[];
  }
  
  export interface IDatum {
    uniqueId: string;
    displayName: string;
    platform: IPlatform;
    avatar?: string;
    profileUrl: string;
    signatureUrl: string;
    stats: IStats;
    rankedSeasons: IRankedSeasons;
    lastRequested: number;
    createdAt: number;
    updatedAt: number;
    nextUpdateAt: number;
  }