import { PDFOptions } from "puppeteer";

export default function validatePDFOptions(options): boolean {
  const expectedKeys: (keyof PDFOptions)[] = [
    "width",
    "height",
    "printBackground",
    "displayHeaderFooter",
    "footerTemplate",
    "headerTemplate",
    "margin",
    "landscape",
    "pageRanges",
    "format",
    "preferCSSPageSize",
    "scale",
    "path",
    "displayHeaderFooter",
    "footerTemplate",
    "headerTemplate",
    "margin",
    "landscape",
    "pageRanges",
    "format",
    "preferCSSPageSize",
    "scale",
    "path",
  ];

  const receivedKeys = Object.keys(options);

  for (const key of receivedKeys) {
    if (!expectedKeys.includes(key as keyof PDFOptions)) {
      return false; // Se uma chave desconhecida for encontrada, retorna false
    }
  }
  
  if (
    options.width &&
    typeof options.width !== "string" ||
    options.height &&
    typeof options.height !== "string" ||
    options.printBackground &&
    typeof options.printBackground !== "boolean" ||
    options.displayHeaderFooter &&
    typeof options.displayHeaderFooter !== "boolean" ||
    options.footerTemplate &&
    typeof options.footerTemplate !== "string" ||
    options.headerTemplate &&
    typeof options.headerTemplate !== "string" ||
    options.margin &&
    typeof options.margin !== "object" ||
    options.landscape &&
    typeof options.landscape !== "boolean" ||
    options.pageRanges &&
    typeof options.pageRanges !== "string" ||
    options.format &&
    typeof options.format !== "string" ||
    options.preferCSSPageSize &&
    typeof options.preferCSSPageSize !== "boolean" ||
    options.scale &&
    typeof options.scale !== "number" ||
    options.path &&
    typeof options.path !== "string"
  ) {
    return false;
  }
  
  return true;
}
