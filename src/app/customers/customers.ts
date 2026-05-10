import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../services/customer-service';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-customers',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit {
  customers!: Observable<Array<Customer>>;
  errorMessage!: string;
  searchformGroup: FormGroup | undefined;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.searchformGroup = this.fb.group({
      keyword: this.fb.control(''),
    });
    this.customers = this.customerService.getCustomers().pipe(
      catchError((err) => {
        this.errorMessage = err.message;
        console.log(this.errorMessage);
        return throwError(err);
      }),
    );
  }

  handleSearchCustomers() {
    let kw = this.searchformGroup?.value.keyword;
    this.customers = this.customerService.searchCustomers(kw).pipe(
      catchError((err) => {
        this.errorMessage = err.message;
        console.log(this.errorMessage);
        return throwError(err);
      }),
    );
  }

  handleDeleteCustomer(c: Customer) {
    let conf = confirm("Are you sure?");
    if (!conf) return
    this.customerService.deleteCustomer(c.id).subscribe(
      {
        next: (resp) => {
          this.customers = this.customers.pipe(
            map(
              data=>{
                let index=data.indexOf(c);
                data.slice(index,1)
                return data;
              }
            )
          );
        },

        error: err => {
          console.log(err);
        }
      }
    )
  }
}
