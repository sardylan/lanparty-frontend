import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private token: string = undefined;

  constructor(private http: HttpClient) {
    this.login('admin', 'admin')
      .then(value => {
        console.log('Login result: {}', value);
      });
  }

  public login(loginEmail: string, loginPassword: string): Promise<boolean> {
    const requestBody = {
      email: loginEmail,
      password: loginPassword
    };

    return this.doPost('http://127.0.0.1:8080/lanparty-manager/api/v1/public/appUser/login', requestBody)
      .then(responseBody => {
        this.token = responseBody.data.token;
        console.log('Token: %s', this.token);
        return responseBody.success as boolean;
      });
  }

  private doPost(url: string, requestBody: any): Promise<any> {
    return this.http
      .post(url, requestBody)
      .toPromise<any>()
      .then(responseBody => {
        return responseBody;
      })
      .catch(reason => {
        console.error(reason);
      });
  }

  // public gameMapList() {
  //   this.doPost('/api/v1/public/gameMap/list', {
  //     token: this.token,
  //     gameTag: ''
  //   });
  // }

}
