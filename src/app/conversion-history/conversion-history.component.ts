import {Component, OnInit} from '@angular/core';
import {ConversionHistory} from "./conversion-history";
import {ConversionHistoryService} from "./conversion-history.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-conversion-history',
  templateUrl: './conversion-history.component.html',
  styleUrls: ['./conversion-history.component.css']
})
export class ConversionHistoryComponent implements OnInit {

  conversionsHistory: ConversionHistory[];

  constructor(private conversionHistoryService: ConversionHistoryService) {
    this.conversionsHistory = [];
  }

  ngOnInit(): void {
    this.getConversionsHistory();
  }

  getConversionsHistory(): void {
    this.conversionHistoryService.getAll().subscribe(
      (response: ConversionHistory[]) => {
        this.conversionsHistory = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
