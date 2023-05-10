import withSplashScreen from "./withSplashScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstScreen from "./components/FirstScreen";
import Prostate_Cancer from "./components/Prostate_Cancer";
import Survey_lung_cancer from "./components/Survey_lung_cancer";
import Hair_loss from "./components/Hair_loss";
import FirstScreen2 from "./components/FirstScreen2";
import Prostate_Cancer2 from "./components/Prostate_Cancer2";
import Survey_lung_cancer2 from "./components/Survey_lung_cancer2";
import Hair_loss2 from "./components/Hair_loss2";
import "./App.css"
import Migraine from "./components/Migraine"
import Migraine2 from "./components/Migraine2"
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstScreen />}></Route>
          <Route path="/hair_loss" element={<Hair_loss />}></Route>
          <Route path="/migraine" element={<Migraine />}></Route>
          <Route path="/Prostate_Cancer" element={<Prostate_Cancer />}></Route>
          <Route
            path="/survey_lung_cancer"
            element={<Survey_lung_cancer />}
          ></Route>

  
          <Route path="/2" element={<FirstScreen2 />}></Route>
          <Route path="/hair_loss2" element={<Hair_loss2 />}></Route>
          <Route path="/migraine2" element={<Migraine2 />}></Route>
          <Route path="/Prostate_Cancer2" element={<Prostate_Cancer2 />}></Route>
          <Route
            path="/survey_lung_cancer2"
            element={<Survey_lung_cancer2 />}
          ></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default withSplashScreen(App);
