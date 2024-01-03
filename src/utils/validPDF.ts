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
    typeof options.width !== "string" ||
    typeof options.height !== "string" ||
    typeof options.printBackground !== "boolean" ||
    typeof options.displayHeaderFooter !== "boolean" ||
    typeof options.footerTemplate !== "string" ||
    typeof options.headerTemplate !== "string" ||
    typeof options.margin !== "object" ||
    typeof options.landscape !== "boolean" ||
    typeof options.pageRanges !== "string" ||
    typeof options.format !== "string" ||
    typeof options.preferCSSPageSize !== "boolean" ||
    typeof options.scale !== "number" ||
    typeof options.path !== "string"
  ) {
    return false;
  }
  
  return true;
}
