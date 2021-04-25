import '../src/core/config/env'
import * as express from "express";
import { db } from './core/database/database.provider'

async function startup() {
const app = express();
await db.useFactory();
app.listen(process.env.PORT, ()=>
    console.log(`Server is listening on PORT ${process.env.PORT}`)
);
}

startup();