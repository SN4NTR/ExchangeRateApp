import {Injectable} from "@angular/core";
import {environment} from "../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class LoginService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  public login(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/login`, {
        'username': username,
        'password': password
      });
  }
}
