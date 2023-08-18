import { test, expect } from "@playwright/test";

test("has title", async ({ page, request }) => {
  const response = await request.post("http://localhost:8080/api/v3/pet", {
    data: {
      id: 10,
      name: "doggie",
      category: {
        id: 1,
        name: "Dogs",
      },
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
      status: "available",
    },
  });

  // Expect a title "to contain" a substring.
  await expect(response).toBeOK();
  console.log(await response.json());
});
