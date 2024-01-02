import { Router } from "express";

import convert from "./routes/convert";

// guaranteed to get dependencies
export default () => {
  const app = Router();

  convert(app);

  return app;
};
