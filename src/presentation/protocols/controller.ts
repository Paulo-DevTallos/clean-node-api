import { HttpRequest, HttpResponse } from "./http";

// protocolo que amarra um padrão ao controller
export interface Controller {
  handle(httpRequest: HttpRequest): HttpResponse;
}
