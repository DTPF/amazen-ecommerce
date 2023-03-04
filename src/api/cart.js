import { basePath, apiVersion } from "./utils/config";
import makeRequest from "./utils/makeRequest";

export async function addToCart(data) {
  const url = `${basePath}/${apiVersion}/add-to-cart`;
  return makeRequest(url, true, true, "POST", null, JSON.stringify(data));
}

export async function getCartItemsByUserId(id) {
  const url = `${basePath}/${apiVersion}/get-cart-items-by-user-id/${id}`;
  return makeRequest(url, true, true, "GET");
}