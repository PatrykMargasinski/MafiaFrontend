import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from 'src/app/models/report.model';
import { ReportService } from 'src/app/shared/report.service';

@Component({
  selector: 'app-show-reports',
  templateUrl: './show-reports.component.html',
  styleUrls: ['./show-reports.component.css']
})
export class ShowReportsComponent implements OnInit {
  constructor(private shared: ReportService, private router: Router) { }
  ReportList: Report[];
  ReportFilteredList: Report[];
  PageNumbers: number[];
  ReportIdsForActions: number[];
  OnlyUnseen:boolean = false;

  ngOnInit(): void {
    this.refreshReportList()
  }

  stringDateConvert(stringDate: string) {
    var d = new Date(stringDate);
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${da}-${mo}-${ye}`
  }

  clearFilters(){
    console.log("HEJ")
    this.OnlyUnseen=false;
    this.refreshReportList();
  }

  refreshReportList(){
    this.ReportIdsForActions=new Array<number>();
    const bossId = Number(sessionStorage.getItem("bossId"))
    this.shared.getReportCount(bossId).subscribe(data=>{
      let bossReportsCount = data;
      this.PageNumbers=new Array<number>();
      for(let i=0;i<bossReportsCount;i+=5)
      {
        this.PageNumbers.push(i)
      }
    })
    this.getNextPage(0,5)
  }

  getNextPage(fromRange: number, toRange: number)
  {
    const bossId = Number(sessionStorage.getItem("bossId"))
    this.shared.getAllReports(
      bossId, 
      fromRange, 
      toRange,
      this.OnlyUnseen)
    .subscribe(data=>{
      this.ReportList=data;
      this.ReportFilteredList=data;
    });
  }

  checkboxClicked(ev, ReportId){
    if(ev.target.checked==true)
      this.ReportIdsForActions.push(ReportId);
    else
    {
      const index = this.ReportIdsForActions.indexOf(ReportId);
      if (index > -1) {
        this.ReportIdsForActions.splice(index, 1);
      }
    }
  }

  showContent(reportId: number){
    this.shared.getReportContent(reportId).subscribe(x=>
      {
        alert(x)
        this.refreshReportList()
      }
    );
  }

  deleteReport(reportId: number): void{
    if(confirm('Are you sure??')){
      this.shared.deleteReport(reportId).subscribe(data=>{
        alert(data.toString());
        this.refreshReportList();
      });
    }
  }

  deleteSelected(): void{
    if(this.ReportIdsForActions.length==0)
    {
      confirm('There is no selected reports')
    }
    else
    {
      if(confirm('Do you want to delete '+this.ReportIdsForActions.length+' reports??')){
        this.shared.deleteReports(this.ReportIdsForActions).subscribe(data=>{
          alert(data.toString());
          this.refreshReportList();
        });
      }
    }
  }
}
