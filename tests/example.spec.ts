import { test, expect } from "@playwright/test";

test("has title", async ({ page, request }) => {
  const response = await request.post("http://127.0.0.1:8080/v3/user", {
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
  console.log(await response.json());
});
