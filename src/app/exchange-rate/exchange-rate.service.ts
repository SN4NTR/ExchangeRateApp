import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ExchangeRate} from "./exchange-rate";
import {environment} from "../../environments/environments";
import {CurrenciesConversion} from "../home/currencies-conversion";

@Injectable({providedIn: 'root'})
export class ExchangeRateService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getActual(): Observable<ExchangeRate[]> {
    return this.httpClient.get<ExchangeRate[]>(`${this.apiUrl}/exchange-rates`);
  }

  public convertCurrencies(currenciesConversion: CurrenciesConversion): Observable<number> {
    return this.httpClient.post<number>(`${this.apiUrl}/exchange-rates/actions/convert`, currenciesConversion);
  }
}
