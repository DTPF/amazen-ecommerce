import { basePath, apiVersion } from "./utils/config";
import makeRequest from "./utils/makeRequest";

export async function addToCart(token, data) {
  const url = `${basePath}/${apiVersion}/add-to-cart`;
  return makeRequest(url, true, true, "POST", token, JSON.stringify(data));
}

export async function getCartItemsByUserId(token, id) {
  const url = `${basePath}/${apiVersion}/get-cart-items-by-user-id/${id}`;
  return makeRequest(url, true, true, "GET", token);
}

export async function deleteCartItemApi(token, cartId) {
  const url = `${basePath}/${apiVersion}/delete-cart-item-by-id/${cartId}`;
  return makeRequest(url, true, true, "DELETE", token);
}