import { test, expect } from "@playwright/test";
import { USER_BASE_PATH } from "../../setup/api-paths/api-paths";
import { parseApiResponse } from "../../utils/helpers";

test("POST should create new user", async ({ request }) => {
  const response = await request.post(USER_BASE_PATH, {
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
  expect(response).toBeOK();
  const parsedReponse: userResponse = await parseApiResponse(response);
  expect(parsedReponse.firstName).toBe("Maks");
});
