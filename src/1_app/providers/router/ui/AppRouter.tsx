import { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig, AppRoutesProps } from "6_shared/config/routeConfig/routeConfig";
import { PageLoader } from "6_shared/ui/PageLoader/PageLoader";
import RequireAuth from "./RequireAuth";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>);

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
};

export default AppRouter;
