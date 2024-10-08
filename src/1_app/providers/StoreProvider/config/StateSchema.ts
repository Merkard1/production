import { ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema } from "2_pages/ArticleDetailsPage";
import { ArticleDetailsPageSchema } from "2_pages/ArticleDetailsPage/model/types";
import { ArticlesPageSchema } from "2_pages/ArticlesPage";
import { AddCommentFormSchema } from "4_features/addCommentForm";
import { LoginSchema } from "4_features/AuthByUserName";
import { ScrollRestoration } from "4_features/ScrollRestoration";
import { ArticleDetailsSchema } from "5_entities/Article";
import { ProfileSchema } from "5_entities/Profile";
import { UserSchema } from "5_entities/User";
import {
  AnyAction,
  CombinedState,
  Dispatch,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";

export interface StateSchema {
  user: UserSchema;
  scrollRestoration: ScrollRestoration;

  // Async Reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg,
  dispatch?: Dispatch,
  state: StateSchema
}
