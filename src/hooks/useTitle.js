import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `END GAME | ${title}`;
  }, [title]);
};
export default useTitle;
