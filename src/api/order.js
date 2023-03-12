import { basePath, apiVersion } from "./utils/config";
import makeRequest from "./utils/makeRequest";

export async function newOrderApi(token, data) {
  const url = `${basePath}/${apiVersion}/new-order`;
  return makeRequest(url, true, true, "POST", token, JSON.stringify(data));
}