import { Injectable } from "@angular/core";
import winax from "winax";


interface wapp {
  activeDocument: wdoc;
  visible: boolean;
  documents: any;
  quit: () => void;
}

interface wdoc {
  variables: any;
  activeDocument: wdoc;
  save: () => void;
  saveAs: (string, number) => void;
  close: () => void;
  selectContentControlsByTag: (string) => any;
}

const toArray = (l): Array<any> => {
  let res = [];
  for (let i = 1; i <= l.count; i++) res = [...res, l.item(i)];
  return res;
};

@Injectable({ providedIn: "root" })
export class WordService {
  private app: wapp = undefined;
  private doc: wdoc = undefined;

  constructor() {}

  private checkApp(): void {
    if (!this.app || !this.app.documents)
      this.app = new winax.Object("Word.Application");
  }

  open(filename: string): void {
    this.checkApp();
    this.app.visible = true;
    this.doc = this.app.documents.open(filename);
  }

  setVariable(name: string, val: string): void {
    this.doc.variables.add(name, val);
  }

  setId(id: string): void {
    this.setVariable("id", id);
  }

  setActiveDocumentById(id: string): void {
    toArray(this.app.documents).forEach((d) => {
      const varId = d.variables.item("id");
      if (varId && varId.value === id) {
        this.doc = d;
        d.activate();
      }
    });
  }

  close(): void {
    this.doc.activeDocument.close();
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
  setVisible(): void {
    this.app.visible = true;
  }

  setInvisible(): void {
    this.app.visible = false;
  }

  setTextfield(ccname: string, value: string): void {
    toArray(this.doc.selectContentControlsByTag(ccname)).forEach((cc) => {
      cc.lockContents = false;
      cc.range.text = value;
      cc.lockContents = true;
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  runWordTrigger(code: string, data: any): void {
    data.helpers = {
      toArray,
    };
    const xx = eval(code);
    xx(this.doc, data);
  }
}
