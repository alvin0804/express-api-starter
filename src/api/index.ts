import userApi from "./user";

export default function api(server) {
  server.use("/api/v1/user", userApi);
}