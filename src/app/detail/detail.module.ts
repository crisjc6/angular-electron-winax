import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { SharedModule } from '../shared/shared.module';
import {NgApexchartsModule} from "ng-apexcharts";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {CsvService} from "../shared/services/csv.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [DetailComponent],
    imports: [CommonModule, SharedModule, DetailRoutingModule, NgApexchartsModule, NgbModule],
  providers: [CsvService]
})
export class DetailModule {}
