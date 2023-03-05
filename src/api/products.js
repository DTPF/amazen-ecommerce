import { basePath, apiVersion } from "./utils/config";
import makeRequest from "./utils/makeRequest";

export async function getProducts() {
  const url = `${basePath}/${apiVersion}/get-products`;
  return makeRequest(url, true, true, "GET");
}