import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json({ message: "Hello Hono!" });
});
app.get("/bar", (c) => {
  return c.json({ message: "Goodbye Hono!" });
});

export default app;
