import { environment } from './../../environments/environment';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Response } from '@angular/http';

/*
  Generated class for the RestService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestService {

  api_url: string;

  per_page = environment.pods.per_page;



  constructor(public http: HttpClient) {
    console.log('Hello RestService Provider');

    if (environment.system.type == "wordpress")
      this.api_url = environment.pods.baseUrl + environment.pods.api_prefix_wp;//+ environment.pods.drivers_url;
    else
      this.api_url = environment.laravel.baseUrl + environment.laravel.api_prefix_lara;//+ environment.laravel.drivers_url;

  }

  getProducts() {
    let url = this.api_url + environment.pods.drivers_url + this.per_page;
    console.log(url)
    return this.http.get(url);
  }


  getWordpress(featured_media: number) {
    return this.http.get("https://shopsirans.ir/wp-json/wp/v2/media/" + featured_media);
  }

}
