import {
    HttpClient,
    HttpHeaders,
    HttpParams,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { environment } from 'src/environments/environment';
import { CacheService } from './cache.service';
  
  @Injectable({
    providedIn: 'root',
  })
  export class HttpService {
    apiUrl: string = environment.base_url;
    constructor(
      private httpClient: HttpClient,
      private cacheService: CacheService
    ) {}
  
    /**
     * Create POST request
     * @param path Path after base url
     * @param body Body.
     * @param options Optional object with HttpParams and/or HttpHeaders.
     * @returns Generic observable.
     */
    post<T>(path: string, body, options?: CustomHttpOptions): Observable<T> {
      return this.httpClient
        .post<T>(this.apiUrl + path, body, {
          headers: options?.headers,
          params: options?.params,
        })
        // .pipe(catchError(this.handleError));
    }
  
    /**
     * Create GET request
     * @param path Path after base url
     * @param body Body.
     * @param options Optional object with HttpParams and/or HttpHeaders.
     * @returns Generic observable.
     */
    get<T>(path: string, options?: CustomHttpOptions): Observable<T> {
      // if data is cached, return from there
      let data = this.checkIfDataIsCached(path);
      if (data)
        return new Observable((subscriber) => {
          subscriber.next(data);
          subscriber.complete();
        });
  
      // else call api
      return this.httpClient
        .get<T>(this.apiUrl + path, {
          headers: options?.headers,
          params: options?.params,
        })
        // .pipe(catchError(this.handleError));
    }
  
    /**
     * Create PUT request
     * @param path Path after base url
     * @param body Body.
     * @param options Optional object with HttpParams and/or HttpHeaders.
     * @returns Generic observable.
     */
    put<T>(path: string, body, options?: CustomHttpOptions): Observable<T> {
      return this.httpClient
        .put<T>(this.apiUrl + path, body, {
          headers: options?.headers,
          params: options?.params,
        })
        // .pipe(catchError(this.handleError));
    }
  
    /**
     * Create DELETE request
     * @param path Path after base url
     * @param body Body.
     * @param options Optional object with HttpParams and/or HttpHeaders.
     * @returns Generic observable.
     */
    delete<T>(path: string, options?: CustomHttpOptions): Observable<T> {
      return this.httpClient
        .delete<T>(this.apiUrl + path, {
          headers: options?.headers,
          params: options?.params,
        })
        // .pipe(catchError(this.handleError));
    }
  
  
    // private handleError(errorRes: HttpErrorResponse) {
    //   let errorCode: string = '1';
    //   // if (errorRes.error.error) errorCode = errorRes.error.error.toString();
    //   return throwError(errorCode);
    // }
  
    checkIfDataIsCached(path: string): any {
      let data = this.cacheService.get(path);
      return data;
    }
  }
  
  interface CustomHttpOptions {
    headers?: HttpHeaders;
    params?: HttpParams;
  }
  