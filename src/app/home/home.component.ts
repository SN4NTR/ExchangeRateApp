import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ExchangeRate} from "../exchange-rate/exchange-rate";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ExchangeRateService} from "../exchange-rate/exchange-rate.service";
import {ConversionHistoryService} from "../conversion-history/conversion-history.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exchangeRates: ExchangeRate[];
  exchangeRateForm: FormGroup;
  conversionValue: number;

  constructor(
    private exchangeRateService: ExchangeRateService,
    private conversionHistoryService: ConversionHistoryService,
    private formBuilder: FormBuilder,
    private router: Router) {

    this.exchangeRates = [];
    this.conversionValue = 0;
    this.exchangeRateForm = this.formBuilder.group({
      fromCurrency: [null],
      toCurrency: [null],
      amount: ''
    });
  }

  ngOnInit(): void {
    this.getActualExchangeRates();
  }

  getActualExchangeRates(): void {
    this.exchangeRateService.getActual().subscribe(
      (response: ExchangeRate[]) => {
        this.exchangeRates = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  convertCurrencies(): void {
    let currenciesConversion = this.exchangeRateForm.value;
    this.exchangeRateService.convertCurrencies(currenciesConversion).subscribe(
      (response: number) => {
        this.conversionValue = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onConvert(): void {
    this.convertCurrencies();
  }

  goToEndpoint(endpoint: string): void {
    this.router.navigate([`${endpoint}`]);
  }
}
