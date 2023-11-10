import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://gorest.co.in/public-api';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  getUserDetalles(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}`);
  }

  getUserPosts(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts?user_id=${userId}`);
  }

  getPostComments(postId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/comments?post_id=${postId}`);
  }
}
