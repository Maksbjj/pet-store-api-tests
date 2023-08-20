import { APIResponse } from "@playwright/test/types/test";

export async function parseApiResponse(response: APIResponse): Promise<any> {
  return response.json();
}
