import { grpc } from 'grpc-web-client';
import { UserService } from '../ts/_proto/src/user_pb_service'
import { GetUserRequest } from '../ts/_proto/src/user_pb'
import {
  GetUserRequest as _GetUserRequest,
  GetUserResponse as _GetUserResponse,
  User as _User
} from '../ts/_proto/src/user_pb.d'

type UserType = Pick<
  Required<_User.AsObject>,
  Exclude<keyof Required<_User.AsObject>, 'followerIdsList'>
> & {
  followerIds: number[];
};

const defaultUser: UserType = {
  name: 'hoge',
  followerIds: [],
  info: {
    description: '',
    birthday: '1990-01-01'
  }
}

type State = {
  user: UserType;
};

export const state: () => State = () => ({
  user: defaultUser
});

export const mutations = {
  setUser(state, payload: { user: UserType }) {
    state.user = payload.user
  }
};

export const actions = {
  getUser({ commit }, payload: { id: number }) {
    const client = grpc.client(UserService.GetUser, {
      host: 'http://localhost:9090',
    });
    const param = generateRequestParam(payload.id);
    client.start();
    client.send(param);
    client.onMessage((message: _GetUserResponse) => {
      const pbUser = message.getUser();
      if (pbUser === undefined) {
        return;
      }
      const user = mapPbUserToUser(pbUser)
      if (user === false) {
        return;
      }
      commit('setUser', { user });
    });
  }
};

const generateRequestParam = (id: number): _GetUserRequest => {
  const req = new GetUserRequest();
  req.setId(id);
  return req;
}

const mapPbUserToUser = (user: _User): UserType | false => {
  const info = user.getInfo();
  if (info === undefined) {
    return false
  }

  return {
      name: user.getName(),
      followerIds: user.getFollowerIdsList(),
      info: info.toObject()
    }
}

