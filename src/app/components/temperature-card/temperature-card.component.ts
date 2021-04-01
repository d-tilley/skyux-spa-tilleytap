import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { finalize } from 'rxjs/operators';

import { ApiService } from '../../services/api/api.service';
import { TemperatureSensor } from '../../models/temperature-sensor.model';

@Component({
  selector: 'app-temperature-card',
  templateUrl: './temperature-card.component.html',
  styleUrls: ['./temperature-card.component.scss']
})
export class TemperatureCardComponent implements OnInit {
  @Input() public sensorId: string;
  public isWaiting: boolean = false;
  public temperatureSensor: TemperatureSensor;

  constructor(
    private apiSvc: ApiService
  ) {}

  public ngOnInit() {
    this.isWaiting = true;
    this.apiSvc.getSensor(this.sensorId)
      .pipe(
        finalize(() => {
          this.isWaiting = false;
        })
      )
      .subscribe({
        next: (result) => {
          this.temperatureSensor = TemperatureSensor.getTemperatureSensorFromDbObject(result);
        },
        error: () => { console.log('error'); }
      });
  }
}
