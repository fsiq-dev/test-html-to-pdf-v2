import puppeteer, { PDFOptions } from "puppeteer";

import validatePDFOptions from "@/utils/validPDF";

interface IGeneratePDFRequest {
  body: {
    htmlString: string;
    options?: string;
  };
}

export const GeneratePDF = async (req: IGeneratePDFRequest, res) => {
  const body = req.body as IGeneratePDFRequest["body"];

  const expectedKeys = ["htmlString", "options"]; // Chaves esperadas na interface
  const receivedKeys = Object.keys(body); // Chaves recebidas na requisição

  const unknownKeys = receivedKeys.filter((key) => !expectedKeys.includes(key));
  if (unknownKeys.length > 0) {
    return res
      .status(400)
      .json({ error: `Unknown keys:: ${unknownKeys.join(", ")}` });
  }

  const { htmlString, options } = body;

  const defaultOptions: PDFOptions = {
    format: "A4",
    printBackground: true,
    margin: {
      top: "20px",
      bottom: "40px",
      left: "20px",
      right: "20px",
    },
  };

  let parsedOptions: PDFOptions = {};

  if (options) {
    try {
      parsedOptions = JSON.parse(options);
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Erro ao analisar as opções fornecidas" });
    }

    if (!validatePDFOptions(parsedOptions)) {
      return res
        .status(400)
        .json({
          error: "As opções fornecidas não correspondem ao formato esperado",
        });
    }
  }

  const Browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });
  const Page = await Browser.newPage();
  await Page.setContent(htmlString);
  await Page.emulateMediaType("screen");
  const pdf = await Page.pdf(parsedOptions || defaultOptions);
  await Browser.close();

  res.contentType("application/pdf").send(pdf);
};
