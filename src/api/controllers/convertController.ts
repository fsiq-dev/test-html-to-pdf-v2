import { options } from './../../../node_modules/tsconfig-paths/src/options';
import puppeteer from "puppeteer";

export const GeneratePDF = async (req, res) => {
  const { htmlString, options } = req.body;

  const Browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const Page = await Browser.newPage();
    await Page.setContent(htmlString);
    const pdf = await Page.pdf({width: "210mm", height: "550mm", ...options});
    await Browser.close();
    res.contentType("application/pdf");
    res.send(pdf);
};
