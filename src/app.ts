import createError from "http-errors";
import express, { NextFunction, Request, Response } from "express";
import path from "path";
import cookieParser from "cookie-parser";

import routers from "./routes";
import { expressLogger } from "./utils/logger";

const app = express();

app.use(expressLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// all routes
app.use("/", routers);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(createError(404));
});

// error handler
app.use( (
  _err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  // set locals, only providing error in development
  return res.status(500).send({ error: "Internal server error" });
});

export default app;
