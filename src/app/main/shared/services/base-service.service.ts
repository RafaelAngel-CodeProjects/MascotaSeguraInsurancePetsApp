import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

import { Catalogo } from '../dtos/model/catalogo';
import { RespuestaCatalogo } from '../dtos/model/respuestaCatalogo';
import { PolizaPlanMascota, PolizaPlanMascotaDBData } from '../dtos/model/polizaPlanMascota';
import { RequestSession } from '../dtos/model/requestSession';
import { ResponseSession } from '../dtos/model/responseSession';
import { RequestConsulta } from '../dtos/model/requestConsulta';
import { ResponseConsulta } from '../dtos/model/responseConsulta';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  public defaultHeaders = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getGeneralData(requestBody: Catalogo, url: string): Observable<any> {
    debugger;
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('x-apikey', String('MkEDRNuxFA7irQ7rjPQSdV3cjgghVZOw'))
      .set('Content-Type', 'application/json')

    this.http.post(url, requestBody, { headers: headers }).subscribe(
      (response) => {
        // Handle the successful response here
        console.log(response);
      }
    );
    var s = this.http.post(url, requestBody, { headers });
    var a = of({});
    return a;

  }

  public catalogos(body: Catalogo, xApikey: string, url: string, observe?: 'body', reportProgress?: boolean): Observable<RespuestaCatalogo>;
  public catalogos(body: Catalogo, xApikey: string, url: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RespuestaCatalogo>>;
  public catalogos(body: Catalogo, xApikey: string, url: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RespuestaCatalogo>>;
  public catalogos(body: Catalogo, xApikey: string, url: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    debugger;
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling catalogos.');
    }

    if (xApikey === null || xApikey === undefined) {
      throw new Error('Required parameter xApikey was null or undefined when calling catalogos.');
    }

    let headers = this.defaultHeaders;
    if (xApikey !== undefined && xApikey !== null) {
      headers = headers.set('x-apikey', String(xApikey));
    }

    let httpHeaderAccepts: string[] = [
      'application/json'
    ];

    headers = headers.set('Accept', httpHeaderAccepts);

    const consumes: string[] = [
      'application/json'
    ];

    headers = headers.set('Content-Type', consumes);


    return this.http.request<RespuestaCatalogo>('post', url,
      {
        body: body,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public expedirPoliza(body: PolizaPlanMascota, xApikey: string, url: string, observe?: 'body', reportProgress?: boolean): Observable<RespuestaCatalogo>;
  public expedirPoliza(body: PolizaPlanMascota, xApikey: string, url: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RespuestaCatalogo>>;
  public expedirPoliza(body: PolizaPlanMascota, xApikey: string, url: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RespuestaCatalogo>>;
  public expedirPoliza(body: PolizaPlanMascota, xApikey: string, url: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    debugger;
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling catalogos.');
    }

    if (xApikey === null || xApikey === undefined) {
      throw new Error('Required parameter xApikey was null or undefined when calling catalogos.');
    }

    let headers = this.defaultHeaders;
    if (xApikey !== undefined && xApikey !== null) {
      headers = headers.set('x-apikey', String(xApikey));
    }

    let httpHeaderAccepts: string[] = [
      'application/json'
    ];

    headers = headers.set('Accept', httpHeaderAccepts);

    const consumes: string[] = [
      'application/json'
    ];

    headers = headers.set('Content-Type', consumes);

    return this.http.request<RespuestaCatalogo>('post', url,
      {
        body: body,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public sessionUsingPOST(body: RequestSession, xApikey: string, url: string, observe?: 'body', reportProgress?: boolean): Observable<ResponseSession>;
  public sessionUsingPOST(body: RequestSession, xApikey: string, url: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseSession>>;
  public sessionUsingPOST(body: RequestSession, xApikey: string, url: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseSession>>;
  public sessionUsingPOST(body: RequestSession, xApikey: string, url: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {


    debugger;
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling catalogos.');
    }

    if (xApikey === null || xApikey === undefined) {
      throw new Error('Required parameter xApikey was null or undefined when calling catalogos.');
    }

    let headers = this.defaultHeaders;
    if (xApikey !== undefined && xApikey !== null) {
      headers = headers.set('x-apikey', String(xApikey));
    }

    let httpHeaderAccepts: string[] = [
      'application/json'
    ];

    headers = headers.set('Accept', httpHeaderAccepts);

    const consumes: string[] = [
      'application/json'
    ];

    headers = headers.set('Content-Type', consumes);

    return this.http.request<RespuestaCatalogo>('post', url,
      {
        body: body,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );

  }

  public consultaAviso(body: RequestConsulta, xApikey: string, url: string, observe?: 'body', reportProgress?: boolean): Observable<ResponseConsulta>;
  public consultaAviso(body: RequestConsulta, xApikey: string, url: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseConsulta>>;
  public consultaAviso(body: RequestConsulta, xApikey: string, url: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseConsulta>>;
  public consultaAviso(body: RequestConsulta, xApikey: string, url: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    debugger;
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling catalogos.');
    }

    if (xApikey === null || xApikey === undefined) {
      throw new Error('Required parameter xApikey was null or undefined when calling catalogos.');
    }

    let headers = this.defaultHeaders;
    if (xApikey !== undefined && xApikey !== null) {
      headers = headers.set('x-apikey', String(xApikey));
    }

    let httpHeaderAccepts: string[] = [
      'application/json'
    ];

    headers = headers.set('Accept', httpHeaderAccepts);

    const consumes: string[] = [
      'application/json'
    ];

    headers = headers.set('Content-Type', consumes);

    return this.http.request<RespuestaCatalogo>('post', url,
      {
        body: body,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );

  }

  saveInsuranceData(insurance: PolizaPlanMascotaDBData, url: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.http.post(url, insurance).subscribe({
        next: (response) => {
          console.log('Data saved successfully:', response);
          observer.next(true);
          observer.complete();
        },
        error: (error) => {
          console.error('Error saving data:', error);
          observer.next(false);
          observer.complete();
        }
      });
    });
  }

  updateInsuranceData(id: String, updatedData: PolizaPlanMascotaDBData, urlbase:string): Observable<any> {
    const url = urlbase + id;
    return this.http.put(url, updatedData);
  }

  getInsuranceData(url: string): Observable<PolizaPlanMascotaDBData> {    
    return new Observable<PolizaPlanMascotaDBData>((observer) => {
      this.http.get(url);
    });
  }
}






