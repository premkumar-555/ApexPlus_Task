import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import { routes_data } from "./Routes";
import LayoutContainer from "../layout";
import Sidebar from "../layout/Sidebar";
import Content from "../layout/Content";

const RoutesSource = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Content>
        <Routes>
          {routes_data.map(({ path, element }, ind) => (
            <Route key={ind} exact path={path} element={element} />
          ))}
        </Routes>
      </Content>
    </LayoutContainer>
  );
};

export default RoutesSource;
