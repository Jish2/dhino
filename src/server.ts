import { Hono } from "hono";

const app = new Hono().basePath("/api");

const root = app.get("/", (c) => {
	return c.json({ message: "Hello Hono!" });
});
export type RootType = typeof root;

const bar = app.get("/bar", (c) => {
	return c.json({ message: "Goodbye Hono!", bar: true });
});
export type BarType = typeof bar;

export default app;
