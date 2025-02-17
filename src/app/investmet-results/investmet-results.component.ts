import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investmet-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investmet-results.component.html',
  styleUrl: './investmet-results.component.css',
})
export class InvestmetResultsComponent {
  @Input({ required: true }) results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
}
