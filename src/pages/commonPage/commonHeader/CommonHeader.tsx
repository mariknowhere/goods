import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { MESSAGE_BUTTON, MESSAGE_TEXTAREA, MESSAGE_TITLE } from "../../../constants/common";
import { prepareArticles } from "../../../utils/prepareArticles";
import { useGoods } from "../../../hooks/useGoods";
import { GERMSP_API_URL } from "../../../constants/routes";
import { ICommonHeaderProps, IGoodProps } from "./CommonHeaderTypes";
import Title from "../../../components/title/Title";
import CommonWarning from "./commonWarning/CommonWarning";

const CommonHeader: FC<ICommonHeaderProps> = ({ setGoods }) => {
  const [isSearchActivated, setSearchActivate] = useState<boolean>(false);
  const [isWarningActive, setWarningActive] = useState<boolean>(false);

  const [articlesValue, setArticlesValue] = useState<string>('');
  const [prepareArticlesValue, setPrepareArticlesValue] = useState<IGoodProps>({ searchArticles: [] });

  const goods = useGoods(GERMSP_API_URL, prepareArticlesValue, isSearchActivated, setWarningActive);

  useEffect(() => {
    if (isSearchActivated) {
      goods.then((response) => {
        if (response?.data.length > 0) {
          setGoods(response?.data);
          setWarningActive(false);
        } else {
          setWarningActive(true);
        }
      });

      setSearchActivate(false);
    }
  }, [isSearchActivated]);

  const onArticlesValueChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    const prepareArticlesValue = prepareArticles(event.currentTarget.value)

    setPrepareArticlesValue(prepareArticlesValue);
    setArticlesValue(event.currentTarget.value);
  }, []);

  const onSearchButtonClick = useCallback(() => {
    setSearchActivate(prevState => !prevState);
  }, []);

  return (
    <div className="common__header">
      <Title>{MESSAGE_TITLE}</Title>
      {isWarningActive && <CommonWarning />}
      <textarea
        value={articlesValue}
        onChange={onArticlesValueChange}
        placeholder={MESSAGE_TEXTAREA}
        className="textarea common__textarea"
      />
      <button onClick={onSearchButtonClick} className="button">
        <span className="button__text">{MESSAGE_BUTTON}</span>
      </button>
    </div>
  );
};

export default CommonHeader;
