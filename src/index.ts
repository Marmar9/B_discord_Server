import { Elysia } from "elysia";
import {Server, type ServerOptions} from "socket.io"
import {Client} from "cassandra-driver"

// CREATE TABLE test (
//     id int PRIMARY KEY,
//     name text,
//     age int
//     );



const client = new Client({
  contactPoints: ['192.168.1.231:9042'],
  keyspace: 'my_keyspace',
  
})
const app = new Elysia().get("/", () => "Hello Elysia").listen(Bun.env.A as string | number);
const io = new Server()


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
