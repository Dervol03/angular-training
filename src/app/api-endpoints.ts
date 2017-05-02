import {Injectable} from '@angular/core';

@Injectable()
export class ApiEndpoints {
  public static HOST = "http://localhost:4201";
  public static API_BASE = ApiEndpoints.HOST + "/api";
}
