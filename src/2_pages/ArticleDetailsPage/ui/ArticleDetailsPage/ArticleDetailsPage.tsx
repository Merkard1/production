import { classNames } from "6_shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleDetails } from "5_entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import Text from "6_shared/ui/Text/Text";
import { CommentList } from "5_entities/Comment";
import { DynamicModuleLoader, ReducersList } from "6_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useDispatch, useSelector } from "react-redux";
import { useInitialEffect } from "6_shared/lib/hooks/useInitialEffect/useInitialEffect";
import {
  fetchCommentsByArticleId,
} from "2_pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddCommentForm } from "4_features/addCommentForm";
import {
  addCommentForArticle,
} from "2_pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";
import { RoutePath } from "6_shared/config/routeConfig/routeConfig";
import { Button, ThemeButton } from "6_shared/ui/Button/Button";
import Page from "6_shared/ui/Page/Page";
import cls from "./ArticleDetailsPage.module.scss";
import { articleDetailsCommentsReducer, getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation("article-details");
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
          {t("Назад к списку")}
        </Button>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t("Комментарии")} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);