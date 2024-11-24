import ResponsiveAppBar from "./components/appBar/ResponsiveAppBar";

import Dashboard from "./dashboard/Dashboard";
import RichEditor from "./components/RichEditor/RichEditor";
import Grid from "./Grid";
import Paper from "@mui/material/Paper";
import SimplePaper from "./components/SimplePaper";
import SimpleContainer from "./components/SimpleContainer";
import { Outlet, Link } from "react-router-dom";
import HomePageLayout from "./components/HomePageLayout";
function Home() {
  return (
    <>
      <ResponsiveAppBar />

      <SimpleContainer>
        <HomePageLayout />
        {/* <Outlet></Outlet> */}
      </SimpleContainer>

      {/* <RichEditor /> */}
      {/* <Dashboard /> */}
    </>
  );
}

export default Home;
