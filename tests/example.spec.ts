import { test, expect } from "@playwright/test";

test("has title", async ({ page, request }) => {
  const response = await request.post("/v3/user", {
    data: {
      firstName: "Maks",
      lastName: "lastName",
      password: "password",
      userStatus: 6,
      phone: "phone",
      id: 2,
      email: "email",
      username: "username",
    },
  });

  // Expect a title "to contain" a substring.
  await expect(response).toBeOK();
  const resp = await response;
  console.log(response);
});
