export interface secureFetchProp {
  url: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  headers: Record<string, string>;
  body?: string;
}

const secureFetch = async ({ url, method, headers, body }: secureFetchProp) => {
  const request = await fetch(url, {
    method: method,
    headers: headers,
    body: body ? body : undefined,
  });

  return request;
};

export default secureFetch;
