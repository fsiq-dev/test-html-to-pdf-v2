import { Router } from 'express'
const multer = require('multer');

const upload = multer();

import { GeneratePDF } from "@/api/controllers/convertController"

const route = Router();

export default (app: Router) => {
   app.use('/convert', route);

    route.get('/', (req, res) => {
        res.status(200).send({message: "rota get"}).end();
    });

    route.post('/', upload.none(), GeneratePDF);
}