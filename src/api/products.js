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

export function updateProductApi(token, productId, product) {
  const url = `${basePath}/${apiVersion}/update-product/${productId}`;
  return makeRequest(url, true, true, "PUT", token, JSON.stringify(product));
}

export function addProductApi(token, data) {
  const url = `${basePath}/${apiVersion}/add-product`;
  return makeRequest(url, true, true, "POST", token, JSON.stringify(data));
}

export function uploadProductImageApi(token, productId, productImage) {
  const url = `${basePath}/${apiVersion}/add-image/${productId}`;
  const formData = new FormData();
  formData.append("productImage", productImage);
  return makeRequest(url, true, true, "PUT", token, formData, null);
}

export function deleteProductImageApi(token, productId, imageName) {
  const url = `${basePath}/${apiVersion}/delete-product-image/${productId}`;
  return makeRequest(url, true, true, "DELETE", token, JSON.stringify(imageName));
}