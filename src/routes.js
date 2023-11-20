import {
  ADMIN_ROUTE,
  BASCET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";
import Admin from "./pages/Admin";
import Bascet from "./pages/Bascet";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePeges from "./pages/DevicePages";
export const authRouth = [
  {
    path: ADMIN_ROUTE,
    element: <Admin />,
  },
  {
    path: BASCET_ROUTE,
    element: <Bascet />,
  },
];
export const publicRouth = [
  {
    path: SHOP_ROUTE,
    element: <Shop />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth />,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    element: <DevicePeges />,
  },
];
