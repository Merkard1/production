import { classNames } from "6_shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { Button, ThemeButton } from "6_shared/ui/Button/Button";
import CopyIcon from "6_shared/assets/icons/copy-20-20.svg";
import cls from "./Code.module.scss";

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn} theme={ThemeButton.CLEAR}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
