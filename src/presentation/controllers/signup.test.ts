import { SignUpController } from "./signup";

describe("SignUp Controller", () => {
  it("Should return 400 if no name is provided", () => {
    /** sistem under test - identifica pattern para identificar qual classe está sendo testada */
    const sut = new SignUpController();

    const httpRequest = {
      body: {
        email: "any_email@email.com",
        password: "123456",
        passwordConfirmation: "123456",
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("Missing param: name"));
  });

  it("Should return 400 if no email is provided", () => {
    /** sistem under test - identifica pattern para identificar qual classe está sendo testada */
    const sut = new SignUpController();

    const httpRequest = {
      body: {
        name: "any_name",
        password: "123456",
        passwordConfirmation: "123456",
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("Missing param: email"));
  });
});
