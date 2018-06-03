import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IPlatform, ISeason, IPlaylist, ILeaderboard, ITier, IPlayer } from "../services/interface";

var token = "ZSA0KZUK3TMN4OQUEC0GISW0U4HSRE7B";

@Injectable()
export class RocketLeagueService {
    constructor(private _http: HttpClient){}

    getPlatform(): Observable<IPlatform>{
        return this._http.get<IPlatform>(`https://api.rocketleaguestats.com/v1/data/platforms?apikey=${token}`);
    }

    getSeason(): Observable<ISeason>{
        return this._http.get<ISeason>(`https://api.rocketleaguestats.com/v1/data/seasons?apikey=${token}`);
    }

    getPlaylist(): Observable<IPlaylist>{
        return this._http.get<IPlaylist>(`https://api.rocketleaguestats.com/v1/data/playlists?apikey=${token}`);
    }

    getLeaderboard(leaderId : number = 10): Observable<ILeaderboard>{
        return this._http.get<ILeaderboard>(`https://api.rocketleaguestats.com/v1/leaderboard/ranked?playlist_id=${leaderId}&apikey=${token}`)
    }

    getTier(): Observable<ITier>{
        return this._http.get<ITier>(`https://api.rocketleaguestats.com/v1/data/tiers?apikey=${token}`)
    }

    getPlayers(playerName: string = "Mike", pageNr: number = 0): Observable<IPlayer>{
        return this._http.get<IPlayer>(`https://api.rocketleaguestats.com/v1/search/players?display_name=${playerName}&page=${pageNr}&apikey=${token}`)
    }
}