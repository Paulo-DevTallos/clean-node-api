export class InvalidParamError extends Error {
  constructor(ParamName: string) {
    super(`Invalid param: ${ParamName}`);
    this.name = "InvalidParamError";
  }
}
