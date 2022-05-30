import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { WelcomeScreen } from "./WelcomeScreen";
import { LogedUser } from "./LogedUser";
import { Register } from "./Register";
import { AfterRegister } from "./AfterRegister";
import { Menu } from "./Menu";
import { LivingRoomDetail } from "./LivingRoomDetail";
import { BathroomDetail } from "./BathroomDetail";
import { DressingRoomDetail } from "./DressingRoomDetail";
import { Bedroom1Detail } from "./Bedroom1Detail";
import { Bedroom2Detail } from "./Bedroom2Detail";
import { WashingMachineSettings } from "./WashingMachineSettings";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/loged-user":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/after-register":
        title = "";
        metaDescription = "";
        break;
      case "/menu":
        title = "";
        metaDescription = "";
        break;
      case "/living-room-detail":
        title = "";
        metaDescription = "";
        break;
      case "/bathroom-detail":
        title = "";
        metaDescription = "";
        break;
      case "/dressing-room-detail":
        title = "";
        metaDescription = "";
        break;
      case "/bedroom-1-detail":
        title = "";
        metaDescription = "";
        break;
      case "/bedroom-2-detail":
        title = "";
        metaDescription = "";
        break;
      case "/washing-machine-settings":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />

      <Route path="/loged-user" element={<LogedUser />} />

      <Route path="/register" element={<Register />} />

      <Route path="/after-register" element={<AfterRegister />} />

      <Route path="/menu" element={<Menu />} />

      <Route path="/living-room-detail" element={<LivingRoomDetail />} />

      <Route path="/bathroom-detail" element={<BathroomDetail />} />

      <Route path="/dressing-room-detail" element={<DressingRoomDetail />} />

      <Route path="/bedroom-1-detail" element={<Bedroom1Detail />} />

      <Route path="/bedroom-2-detail" element={<Bedroom2Detail />} />

      <Route
        path="/washing-machine-settings"
        element={<WashingMachineSettings />}
      />
    </Routes>
  );
}
export default App;
