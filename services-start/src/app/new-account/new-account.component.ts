import { Component } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService){
    //access the accountsService and subscribe to the event being emitted
    //EventEmitter just wraps an observable, so we can subscribe to it
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert( 'New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccounts(accountName, status);
    //Custom service example: 
    // this.loggingService.logStatusChange(accountStatus);
  }
}
