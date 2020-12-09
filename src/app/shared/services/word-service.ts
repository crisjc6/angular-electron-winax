import { Injectable } from "@angular/core";
import wordConsts from "./word-consts";
import winax from "winax";

interface wdoc {
  count: number;
  item: (arg0: number) => any;
  save: () => void;
  saveAs: (string, number) => void;
  close: () => void;
  selectContentControlsByTag: (string) => any;
}

interface wlist {
  count: number;
  item: (arg0: number) => any;
}

const toArray = (l: wlist): Array<any> => {
  let res = [];
  for (let i = 1; i <= l.count; i++) res = [...res, l.item(i)];
  return res;
};

@Injectable({ providedIn: "root" })
export class WordService {
  private app = undefined;

  constructor() {}

  private checkApp() {
    if (!this.app || !this.app.documents)
      this.app = new winax.Object("Word.Application");
  }

  open(filename: string): wdoc {
    this.checkApp();
    this.app.visible = true;
    return this.app.documents.open(filename);
  }

  close(doc: wdoc): void {
    doc.close();
  }

  quit(): void {
    if (this.app) {
      toArray(this.app.documents).forEach((doc) => {
        doc.close(false);
      });
      this.app.quit();
      this.app = undefined;
    }
  }

  saveAsPdf(doc: wdoc, path: string): void {
    doc.saveAs(path, wordConsts.WdExportFormat.wdExportFormatPDF);
  }
  setVisible(): void {
    this.app.visible = true;
  }
  setInvisible(): void {
    this.app.visible = false;
  }

  setTextfield(doc: wdoc, ccname: string, value: string): void {
    toArray(doc.selectContentControlsByTag(ccname)).forEach((cc) => {
      cc.lockContents = false;
      cc.range.text = value;
      cc.lockContents = true;
    });
  }
}
