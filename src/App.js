import { Navigate, Route, Routes } from "react-router-dom";
import { Landing } from "./containers/Landing";
import { ViewAPIData } from "./containers/ViewAPIData";
import { routePaths } from "./utils/constants";

export const App = () => {
  return (
    <Routes>
      <Route
        path={routePaths.root}
        element={<Navigate to={routePaths.landing} />}
      />
      <Route path={routePaths.landing} element={<Landing />} />
      <Route path={routePaths.view} element={<ViewAPIData />} />
    </Routes>
  );
};
