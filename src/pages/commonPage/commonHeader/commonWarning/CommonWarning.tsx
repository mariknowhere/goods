import { FC } from 'react';
import Text from "../../../../components/text/Text";
import { MESSAGE_ERROR } from "../../../../constants/common";

const CommonWarning: FC = () => {
  return (
    <div className="common__warning">
      <img src="/assets/icons/warning.svg" alt="Ошибка" />
      <Text>{MESSAGE_ERROR}</Text>
    </div>
  );
};

export default CommonWarning;
