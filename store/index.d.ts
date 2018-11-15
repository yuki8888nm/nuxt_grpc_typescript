
/* common */
export type NonPayload = undefined;

type Commit<MP, RMP> = {
  <K extends keyof MP>(type: K, payload?: MP[K]): Promise<any>;
  <K2 extends keyof RMP>(
    type: K2,
    payload: RMP[K2],
    options: { root: true }
  ): Promise<any>;
};

type Dispatch<AP, RAP> = {
  <K extends keyof AP>(type: K, payload?: AP[K]): Promise<any>;
  <K2 extends keyof RAP>(
    type: K2,
    payload: RAP[K2],
    options: { root: true }
  ): Promise<any>;
};

type ActionContext<S, MP, AP, GR> = {
  state: S;
  commit: Commit<MP, RootMutationPayloads>;
  dispatch: Dispatch<AP, RootActionPayloads>;
  getters: GR;
  rootGetters: RootGetterResults;
  rootState: RootState;
};

export type Mutations<S, MP> = {
  [K in keyof MP]: (state: S, payload: MP[K]) => void
};
export type Actions<S, MP, AP, GR> = {
  [K in keyof AP]: (
    context: ActionContext<S, MP, AP, GR>,
    payload: AP[K]
  ) => void
};
export type Getters<S, GR> = { [K in keyof GR]: (state: S) => GR[K] };


/* index */
type ChangeRootHogePayload = {
    value: string
}
type ChangeRootFugaPayload = {
    value: number
}

export type RootState = {
    hoge: string;
    fuga: number;
};

export type RootMutationPayloads = {
    changeRootHoge: ChangeRootHogePayload;
    changeRootFuga: ChangeRootFugaPayload;
};

type RootSavePayload = {
    hoge: string
    fuga: number
}
export type RootActionPayloads = {
      save: RootSavePayload
};

export type RootGetterResults = {
    doubleFuga: number
};


/* main */
type ChangeHogePayload = {
    value: string
}
type ChangeFugaPayload = {
    value: number
}

export type State = {
    hoge: string;
    fuga: number;
};

export type MutationPayloads = {
    changeHoge: ChangeHogePayload;
    changeFuga: ChangeFugaPayload;
    incrementFuga: NonPayload;
};

type SavePayload = {
    hoge: string
    fuga: number
}

export type ActionPayloads = {
    mdSave: SavePayload
    mdSaveRoot: SavePayload
};

export type GetterResults = {
    doubleFuga: number
};