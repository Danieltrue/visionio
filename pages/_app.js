import "../styles/globals.css";
import store from "../redux/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { responsiveSize } from "../redux/action/features.action";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        dispatch(responsiveSize(window.innerWidth));
      });
      dispatch(responsiveSize(window.innerWidth));
    }
    return;
  }, [dispatch]);
  return <Component {...pageProps} />;
}

export default store.withRedux(MyApp);
// export default MyApp
