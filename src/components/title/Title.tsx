import { FC } from 'react';
import classNames from "classnames";
import { ITitleProps } from "./TitleTypes";

const Title: FC<ITitleProps> = ({ children, className, onClick }) => (
  <h1 onClick={onClick} className={classNames(className, "title")}>{children}</h1>
);

export default Title;
