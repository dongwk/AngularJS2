import {Injectable} from "@angular/core";
import {
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from "@angular/common/http";
import {Observable} from "rxjs";
import {SessionHandle} from "../session/session-handle";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
      const jwtReq = req.clone({
          headers: req.headers.set('Authorization', 'Bearer '+SessionHandle.loginUser.token)
      });
      return next.handle(jwtReq);
    }
}
