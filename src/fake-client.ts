import { hc } from "hono/client";
import { BarType, RootType } from "./server";

const client = hc<RootType>("/api");
const client2 = hc<BarType>("/api/bar");

const getRoot = async () => {
	const foo = await client.api.$get();
	const json = await foo.json();
	json.message;
};
const getBar = async () => {
	const foo = await client2.api.bar.$get();
	const json = await foo.json();
	json.bar;
};
