import express from "express";

import { routes } from "./routes";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () =>
  console.log(`SERVER IS RUNNING IN PORT = ${3333}`)
);
