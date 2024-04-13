import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";
import ReactGA from "react-ga4";

import Router from "./router";
import i18n from "./translation";

//const trackingIds = ['G-WK8FXW2821', 'G-SWV6BZ1KER', 'G-R6Q7DW4DDB', 'G-NX0QK8MD21', 'G-9FVCJH1EJ9'];

ReactGA.initialize("G-41RE98HS2L");


const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
