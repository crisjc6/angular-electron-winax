import { Injectable } from "@angular/core";
import winax from "winax";

// @ts-ignore
@Injectable({ providedIn: "root" })
export class WeapService {
  constructor() {

  }
openWeap() {
    const app = new winax.Object("WEAP.WEAPApplication");
    app.Visible = true;
}
}
