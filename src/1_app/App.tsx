import { Suspense, useEffect } from "react";

import { classNames } from "6_shared/lib/classNames/classNames";
import { useTheme } from "1_app/providers/ThemeProvider";
import { AppRouter } from "1_app/providers/router";
import { Navbar } from "3_widgets/Navbar";
import { Sidebar } from "3_widgets/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getUserInited, userActions } from "5_entities/User";

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
