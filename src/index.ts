import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { PORT } from "config/environment";
import { connectDb } from "database/db";
import shortener from "routes/shortener.routes";

const app = new Elysia();

// Connect to the db on server start
app.onStart(connectDb);

//Middlewares
app.use(
  swagger({
    documentation: {
      tags: [{ name: "Shortener", description: "Needed endpoints for shrink a url" }],
    },
  })
);

// Routes
app.use(shortener);

// Start server
app.listen(PORT || 3000);
