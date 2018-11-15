// package: helloworld
// file: src/user.proto

import * as src_user_pb from "../src/user_pb";
export class UserService {
  static serviceName = "helloworld.UserService";
}
export namespace UserService {
  export class GetUser {
    static readonly methodName = "GetUser";
    static readonly service = UserService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = src_user_pb.GetUserRequest;
    static readonly responseType = src_user_pb.GetUserResponse;
  }
}
