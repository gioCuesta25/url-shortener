import { ShrinkedUrlModel } from "database/schemas";
import { Context } from "elysia";
import { ShrinkUrlReqBody } from "models/urls";
import { generateRandomShortId } from "utils";

export const shortenerController = async ({ body, set }: Context<{ body: ShrinkUrlReqBody }>) => {
  try {
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
