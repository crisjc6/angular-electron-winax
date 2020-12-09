const fs = (<any>window).require("fs");
const fsp = (<any>window).require("fs").promises;

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PDFDocument } from 'pdf-lib';
// import wordapi from "../../util/wordapi";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  async mergePdfs(pathToPdfs: string[]): Promise<Uint8Array> {
    const mergedPdf = await PDFDocument.create();
    for (const pathToPdf of pathToPdfs) {
      const pdfData = await fsp.readFile(pathToPdf);
      const pdfDoc = await PDFDocument.load(pdfData);
      const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
      pages.forEach((page) => mergedPdf.addPage(page));
    }
    return await mergedPdf.save();
  }

  onMergePDF(): void {
    const pdfsToMerge = ["data/1.pdf", "data/2.pdf"];
    this.mergePdfs(pdfsToMerge).then(pdfdata => fs.writeFileSync("data/merged.pdf", pdfdata));
  }

  ccc(): void {
    const winax = require('winax');
    const app = new winax.Object('Word.Application');
    const doc = app.documents.open("/tmp/1.docx");
    app.visible = true;
    doc.saveAs("/tmp/test.pdf", 17 /* wdFormatPDF */);
    doc.close();
    app.quit();
  }

}
