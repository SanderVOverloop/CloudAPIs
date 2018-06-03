import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IGames, IDevelopers } from "../services/interface";

@Injectable()
export class EigenApiService {
    constructor(private _http: HttpClient){}

    getGames(): Observable<IGames>{
        return this._http.get<IGames>('https://localhost:5001/api/games');
        //return this._http.get<IGames>('http://localhost:53697/api/games');
    }

    getDevelopers(): Observable<IDevelopers>{
        return this._http.get<IDevelopers>('https://localhost:5001/api/developers');
        //return this._http.get<IDevelopers>('http://localhost:53697/api/developers');        
    }

    getGame(value: number = 1): Observable<IGames>{
        return this._http.get<IGames>(`https://localhost:5001/api/games/${value}`);
    }
}