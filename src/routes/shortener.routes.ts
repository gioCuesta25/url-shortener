import { getUrl, shrinkeUrl } from "controllers/shortener.controller";
import { Elysia, t } from "elysia";

const shortener = new Elysia();

shortener.post("/", shrinkeUrl, {
  detail: { tags: ["Shortener"] },
  body: t.Object({
    url: t.String({ minLength: 10 }),
  }),
});

shortener.get("/:id", getUrl, {
  detail: { tags: ["Shortener"] },
  params: t.Object({
    id: t.String({ minLength: 10, maxLength: 10 }),
  }),
});

export default shortener;
