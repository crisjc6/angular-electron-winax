import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { SharedModule } from '../shared/shared.module';
import {NgApexchartsModule} from "ng-apexcharts";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {CsvService} from "../shared/services/csv.service";

@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, SharedModule, DetailRoutingModule, NgApexchartsModule],
  providers: [CsvService]
})
export class DetailModule {}
