import { AUTHORIZATION_TOKEN, AUTHORIZATION_USERNAME } from "../constants/routes";
import axios from "axios";
import { IGoodProps } from "../pages/commonPage/commonHeader/CommonHeaderTypes";
import { Dispatch, SetStateAction } from "react";

export const useGoods = async (
  url: string,
  data: IGoodProps,
  isSearchActivated: boolean,
  setWarningActive:  Dispatch<SetStateAction<boolean>>,
) => {
  if (isSearchActivated) {
    try {
      return await axios.post(url, data, {
        headers: {
          'Authorization': `${AUTHORIZATION_USERNAME} ${AUTHORIZATION_TOKEN}`
        },
      });
    } catch (error) {
      console.error(error);

      setWarningActive(true);
    }
  }
}
