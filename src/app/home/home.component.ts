const fs = (<any>window).require("fs");

import { Component, OnInit } from "@angular/core";
import { PdfService } from "../shared/services/pdf.service";
import { WordService } from "../shared/services/word-service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  doc = undefined;
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
    this.doc = this.wordService.open("/tmp/1.docx");
  }

  saveAsPDF(): void {
    this.wordService.saveAsPdf(this.doc, "/tmp/test.pdf");
  }

  close(): void {
    this.wordService.close(this.doc);
  }

  quit(): void {
    this.wordService.quit();
  }
}
