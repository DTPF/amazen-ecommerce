import { basePath, apiVersion } from "./utils/config";
import makeRequest from "./utils/makeRequest";

export async function getProductsApi() {
  const url = `${basePath}/${apiVersion}/get-products`;
  return makeRequest(url, true, true, "GET");
}

export async function getProductByIdApi(id) {
  const url = `${basePath}/${apiVersion}/get-product-by-id/${id}`;
  return makeRequest(url, true, true, "GET");
}

export function getProductImageApi(imageName) {
  const url = `${basePath}/${apiVersion}/get-product-image/${imageName}`;
  return makeRequest(url, null, false);
}

export function deleteProductApi(token, productId) {
  const url = `${basePath}/${apiVersion}/delete-product/${productId}`;
  return makeRequest(url, true, true, "DELETE", token);
}