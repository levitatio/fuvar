import fetch from 'node-fetch';

function options (method, body) {
  const bodyString = body == null ? null : JSON.stringify(body);
  const headers = {
    'Content-Type': 'application/json'
  };
  return {
    method,
    headers,
    body: bodyString
  };
}

export function apiRequest (url, method, body) {
  return fetch(url, options(method, body))
    .then(handleResponse).catch(handleResponse);
}

function handleResponse (response) {
  if (!response.ok) {
    if (response.status === 401) {
      // Unauthorized --> delete authentication token or session cookie
      return response;
    } else {
      return Promise.reject(response.statusText);
    }
  } else if (response.status !== 204) {
    return response.json();
  } else {
    return response;
  }
}
