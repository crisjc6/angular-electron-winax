import { Injectable } from '@angular/core';
import { PDFDocument } from "pdf-lib";
const fsp = (<any>window).require("fs").promises;

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

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
}
