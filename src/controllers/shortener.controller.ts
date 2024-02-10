import { ShrinkedUrlModel } from "database/schemas";
import { Context } from "elysia";
import { ShrinkUrlReqBody } from "models/urls";
import { generateRandomShortId } from "utils";

export const shrinkeUrl = async ({ body, set }: Context<{ body: ShrinkUrlReqBody }>) => {
  try {
    //TODO: Clean url before save
    const newShrinkedUrl = await ShrinkedUrlModel.create({
      original: body.url,
      shrinkedId: generateRandomShortId(),
    });

    return { shrinkedUrl: newShrinkedUrl.shrinkedId };
  } catch (error) {
    console.error(error);
    set.status = 400;
  }
};

export const getUrl = async ({ params, set }: Context<{ params: { id: string } }>) => {
  try {
    const url = await ShrinkedUrlModel.findOne({ shrinkedId: params.id });
    if (url === null) {
      set.status = 404;
      return { message: `Error: url with id ${params.id} not found` };
    }
    set.redirect = `https://${url.original}`;
  } catch (error) {
    console.log("error: ", error);
    return "<h1>Error</h1>";
  }
};
