import { Elysia } from "elysia";
import {Server, type ServerOptions} from "socket.io"
import {serve} from "bun"
const app = new Elysia().get("/", () => "Hello Elysia").listen(Bun.env.A as string | number);
const io = new Server()

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
