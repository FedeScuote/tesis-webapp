import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../environment/dev.environment';

@Injectable()
export class ApiService {

  constructor(public http: HttpClient) {
  }

  public getUsers(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/api/org.tesis.mynetwork.User`);
  }

  public getUser(userId: string): Observable<any> {
    return this.http.get(`${API_BASE_URL}/api/org.tesis.mynetwork.User/${userId}`);
  }

  /**
   *
   * @param user
   * @example { \
   "$class": "org.tesis.mynetwork.createUser", \
   "userId": "2", \
   "email": "colo%40um.com", \
   "name": "Santiago", \
   "roles": ["ADMIN", "BUYER", "SELLER"] \
 }
   * @returns {Observable<any>}
   */
  public createUser(user): Observable<any> {
    return this.http.post(`${API_BASE_URL}/api/org.tesis.mynetwork.createUser`, user);
  }

  public getOrganizations(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/api/org.tesis.mynetwork.NormalOrganization`);
  }

  public getOrganization(organizationId: string): Observable<any> {
    return this.http.get(`${API_BASE_URL}/api/org.tesis.mynetwork.NormalOrganization/${organizationId}`);
  }

  public createOrganization(organization): Observable<any> {
    return this.http.post(`${API_BASE_URL}/org.tesis.mynetwork.createOrganization`, organization);
  }

}
