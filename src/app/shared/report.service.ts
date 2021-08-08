import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  readonly APIUrl = environment.APIEndpoint

  constructor(private http:HttpClient) { }

  getReportCount(bossId: number):Observable<number>{
    return this.http.get<number>(this.APIUrl+'/report/count?bossId='+bossId);
  }

  getAllReports(bossId: number, fromRange: number, toRange:number, onlyUnseen: boolean):Observable<Report[]>{
    return this.http.get<Report[]>(this.APIUrl+'/report/to?bossId=' + bossId + '&fromRange=' + fromRange + '&toRange=' + toRange
     + '&onlyUnseen=' + onlyUnseen);
  }

  deleteReport(val:number){
    return this.http.delete(this.APIUrl+'/report/'+val);
  }

  deleteReports(val:number[]){
    return this.http.delete(this.APIUrl+'/reports?stringIds='+val.join('i'));
  }

  getReportContent(val: number){
    return this.http.get(this.APIUrl+'/report/content?id='+val);
  }
}

