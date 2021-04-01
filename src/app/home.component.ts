import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { SkyWaitService } from '@skyux/indicators';

import { ApiService } from './services/api/api.service';
import { User } from './models/user.model';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userId: string = 'mock_user_id';
  public user: User;

  constructor(
    private apiSvc: ApiService,
    private waitSvc: SkyWaitService
  ) {}

  public ngOnInit() {
    this.waitSvc.beginBlockingPageWait();
    this.apiSvc.getUser(this.userId)
    .pipe(
      finalize(() => {
        this.waitSvc.endBlockingPageWait();
      })
    )
    .subscribe({
      next: (result) => {
        this.user = User.getUserFromDbObject(result);
      },
      error: () => { console.log('error'); }
    });
  }
}
