export interface hydrateState {
  tick: string;
  server: any;
  client: any;
}

export enum hydrateActionTypes {
  HYDRATE = 'HYDRATE',
  TICK = 'TICK',
}

interface hydrateActionType {
  type: hydrateActionTypes.HYDRATE;
}
interface hydrateTickActionType {
  type: hydrateActionTypes.TICK;
}

export type hydrateActions = hydrateActionType | hydrateTickActionType;
