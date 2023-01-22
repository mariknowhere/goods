import { FC } from 'react';
import { ITextProps } from "./TextTypes";
import classNames from "classnames";

const Text: FC<ITextProps> = ({ children, className, onClick }) => (
  <span onClick={onClick} className={classNames(className, "text")}>{children}</span>
);

export default Text;
