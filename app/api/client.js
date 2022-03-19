import { create } from "apisauce";
import storage from "../auth/storage";

const apiClient = create({
  baseURL: "http://192.168.10.8:9000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await storage.getToken();
  if (!authToken) return;

  request.headers["x-auth-token"] = authToken;
});

export default apiClient;
