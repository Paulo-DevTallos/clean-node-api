import { MissingParamError } from "../errors/missing-param.error";
import { SignUpController } from "./signup";

const makeSut = (): SignUpController => {
  return new SignUpController();
};

describe("SignUp Controller", () => {
  it("Should return 400 if no name is provided", () => {
    /** sistem under test - identifica pattern para identificar qual classe está sendo testada */
    const sut = makeSut();

    const httpRequest = {
      body: {
        email: "any_email@email.com",
        password: "123456",
        passwordConfirmation: "123456",
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("name"));
  });

  it("Should return 400 if no email is provided", () => {
    const sut = makeSut();

    const httpRequest = {
      body: {
        name: "any_name",
        password: "123456",
        passwordConfirmation: "123456",
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("email"));
  });

  it("Should return 400 if no password is provided", () => {
    const sut = makeSut();

    const httpRequest = {
      body: {
        name: "any_name",
        email: "any_email@email.com",
        passwordConfirmation: "123456",
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("password"));
  });

  it("Should return 400 if no passwordConfirmation is provided", () => {
    const sut = makeSut();

    const httpRequest = {
      body: {
        name: "any_name",
        email: "any_email@email.com",
        password: "123456",
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new MissingParamError("passwordConfirmation"),
    );
  });
});
