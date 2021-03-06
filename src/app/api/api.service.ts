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

  public getRegulatorOrgs(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/api/org.tesis.mynetwork.RegulatorOrganization`);
  }

  public getOrganization(organizationId: string): Observable<any> {
    return this.http.get(`${API_BASE_URL}/api/org.tesis.mynetwork.NormalOrganization/${organizationId}`);
  }

  public createOrganization(organization): Observable<any> {
    return this.http.post(`${API_BASE_URL}/org.tesis.mynetwork.createOrganization`, organization);
  }

  public getReceipts(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/api/org.tesis.mynetwork.getReceipts`);
  }

  public offerService(service): Observable<any> {
    return this.http.post(`${API_BASE_URL}/api/org.tesis.mynetwork.offerService`, service);
  }

  public getOffers(): Observable<any> {
    return this.http.post(`${API_BASE_URL}/api/org.tesis.mynetwork.getOffers`, {'$class': 'org.tesis.mynetwork.getOffers'});
  }

  public buyOffer(offer): Observable<any> {
    return this.http.post(`${API_BASE_URL}/api/org.tesis.mynetwork.buyService`,
      {'$class': 'org.tesis.mynetwork.buyService',
        'serviceId': offer.commodityId,
        'receiptId': (Math.floor(Math.random() * 100) + 1)});
  }
}
