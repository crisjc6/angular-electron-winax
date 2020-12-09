const fs = (<any>window).require("fs");

import { Component, OnInit } from "@angular/core";
import { PdfService } from "../shared/services/pdf.service";
import { WordService } from "../shared/services/word-service";

const timer = (f) => {
  const t = performance.now();
  f();
  return performance.now() - t;
};

const myid = "123445";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    private wordService: WordService,
    private pdfService: PdfService
  ) {}

  ngOnInit(): void {}

  onMergePDF(): void {
    const pdfsToMerge = ["data/1.pdf", "data/2.pdf"];
    this.pdfService.mergePdfs(pdfsToMerge).then((pdfdata) => {
      fs.writeFileSync("data/merged.pdf", pdfdata);
    });
  }

  openTestDocument(): void {
    this.wordService.open("/tmp/1.docx");
    this.wordService.setActiveDocumentById(myid);
  }

  testEmpty(): void {
    console.log(
      timer(() => {
        this.wordService.setActiveDocumentById(myid);
        this.wordService.setTextfield("vsinfo", " ");
        for (let i = 1; i <= 15; i++)
          this.wordService.setTextfield(`cc${i}`, " ");
      })
    );
  }

  testFill(): void {
    const x = `Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet. »Wie ein Hund!« sagte er, es war, als sollte die Scham ihn überleben.`;
    const vsinfo = `das ist ja mal eine Info\nund was für eine!`;
    console.log(
      timer(() => {
        this.wordService.setActiveDocumentById(myid);
        this.wordService.setTextfield("vsinfo", vsinfo);
        for (let i = 1; i <= 15; i++)
          this.wordService.setTextfield(`cc${i}`, x);
      })
    );
  }

  saveAsPDF(): void {
    this.wordService.saveAsPdf("/tmp/test.pdf");
  }

  close(): void {
    this.wordService.close();
  }

  quit(): void {
    this.wordService.quit();
  }
}
