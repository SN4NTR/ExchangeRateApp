import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environments";
import {ConversionHistory} from "./conversion-history";

@Injectable({providedIn: 'root'})
export class ConversionHistoryService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<ConversionHistory[]> {
    return this.httpClient.get<ConversionHistory[]>(`${this.apiUrl}/conversions-history`);
  }
}
