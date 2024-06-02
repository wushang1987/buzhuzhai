import { useEffect } from "react";
import axios from "axios";

import ResponsiveAppBar from "./components/appBar/ResponsiveAppBar";

function Home() {
  axios.defaults.withCredentials = true; // 全局设置

  useEffect(() => {
    axios.get("http://localhost:3000/auth/user").then((result) => {
      console.log(result);
    });
  }, []);

  return (
    <div>
      <ResponsiveAppBar />
    </div>
  );
}

export default Home;
