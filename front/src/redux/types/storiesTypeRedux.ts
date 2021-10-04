export interface storiesState {
  items: any;
  error: string;
  loading: boolean;
}

export enum storiesActionType {
  FETCH_STORIES_SUCCESS = 'FETCH_STORIES_SUCCESS',
  FETCH_STORIES_ERROR = 'FETCH_STORIES_ERROR',
}

interface fetchStoriesSuccessType {
  type: storiesActionType.FETCH_STORIES_SUCCESS;
  payload: any[];
}
interface fetchStoriesErrorType {
  type: storiesActionType.FETCH_STORIES_ERROR;
  payload: string;
}

export type storiesActions = fetchStoriesSuccessType | fetchStoriesErrorType;
