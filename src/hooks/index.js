import { useCallback } from "react";

export const useParseYear = date => {
  return (useCallback(
    () => {
      const now = new Date(date);

      return now.getFullYear();
    }, [date]
  ));
}
