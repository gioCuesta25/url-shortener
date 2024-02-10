import { shortenerController } from "controllers/shortener.controller";
import { Elysia, t } from "elysia";

const shortener = new Elysia().post("/", shortenerController, {
  detail: { tags: ["Shortener"] },
  body: t.Object({
    url: t.String({ minLength: 10 }),
  }),
});

export default shortener;
