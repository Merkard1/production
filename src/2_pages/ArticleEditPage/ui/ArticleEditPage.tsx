import { useTranslation } from "react-i18next";
import { classNames } from "6_shared/lib/classNames/classNames";
import Page from "3_widgets/Page/Page";
import { useParams } from "react-router-dom";
import cls from "./ArticleEditPage.module.scss";

interface ArticleEditPageProps {
 className?: string
}

const ArticleEditPage = ({ className } : ArticleEditPageProps) => {
  // TODO this page
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();
  const isNew = Boolean(id);

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isNew ? `Redact${id}` : "Create"}
    </Page>
  );
};

export default ArticleEditPage;
