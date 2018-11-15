// package: helloworld
// file: src/user.proto

import * as jspb from "google-protobuf";

export class User extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearFollowerIdsList(): void;
  getFollowerIdsList(): Array<number>;
  setFollowerIdsList(value: Array<number>): void;
  addFollowerIds(value: number, index?: number): number;

  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): User.Info | undefined;
  setInfo(value?: User.Info): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    name: string,
    followerIdsList: Array<number>,
    info?: User.Info.AsObject,
  }

  export class Info extends jspb.Message {
    getDescription(): string;
    setDescription(value: string): void;

    getBirthday(): string;
    setBirthday(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Info.AsObject;
    static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Info;
    static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
  }

  export namespace Info {
    export type AsObject = {
      description: string,
      birthday: string,
    }
  }
}

export class GetUserRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetUserResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

