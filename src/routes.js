import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Pages
import HomePage from "./layouts/HomePage";
import AboutTheMinistry from "./layouts/AboutTheMinistry";
import Staff from "./layouts/Staff";
import EmployeeFullInfo from "./components/EmployeeFullInfo";
import MinistryCenter from "./layouts/MinistryCenter";
import TerritorialAdministrations from "./layouts/TerritorialAdministrations";
import RepublicanOrganizations from "./layouts/RepublicanOrganizations";
import StructureOfTheCentral from "./layouts/StructureOfTheCentral";
import Contact from "./layouts/Contact";
import AllPageInfo from "./components/AllPageInfo";
import LostItsPower from "./layouts/LostItsPower";
import TheRestOfThePage from "./layouts/TheRestOfThePage";
import AboutDevelopingPartnerships from "./layouts/AboutDevelopingPartnerships";
import DraftPresidentialDecree from "./layouts/DraftPresidentialDecree";
import Statistika from "./layouts/Statistika";
import AnalyticalData from "./layouts/AnalyticalData";
import RequiredDocuments from "./layouts/RequiredDocuments";
import ChildrenCenters from "./layouts/ChildrenCenters";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:lang" component={HomePage} exact />
      <Route path="/:lang/vazirlik-haqida" exact component={AboutTheMinistry} />
      <Route path="/:lang/staff" exact component={Staff} />
      <Route path="/:lang/staff/:nameid" exact component={EmployeeFullInfo} />
      <Route
        path="/:lang/vazirlik-markaziy-apparati"
        exact
        component={MinistryCenter}
      />
      <Route
        path="/:lang/vazirlik-markaziy-apparati/:nameid"
        exact
        component={EmployeeFullInfo}
      />
      <Route
        path="/:lang/hududiy-boshqarmalar"
        exact
        component={TerritorialAdministrations}
      />
      <Route
        path="/:lang/hududiy-boshqarmalar/:nameid"
        exact
        component={EmployeeFullInfo}
      />
      <Route
        path="/:lang/respublika-tashkilotlari"
        exact
        component={RepublicanOrganizations}
      />
      <Route
        path="/:lang/respublika-tashkilotlari/:nameid"
        exact
        component={EmployeeFullInfo}
      />

      <Route
        path="/:lang/vazirlik-markaziy-apparati-tuzilmasi"
        exact
        component={StructureOfTheCentral}
      />

      <Route
        path="/:lang/meyoriy-hujjatlar-loyihalari"
        exact
        component={DraftPresidentialDecree}
      />
      <Route
        path="/:lang/vazirlik-ishtirokidagi-xalqaro-shartnomalar"
        exact
        component={AboutDevelopingPartnerships}
      />
      <Route path="/:lang/contact" exact component={Contact} />
      <Route
        path="/:lang/oz-kuchini-yoqotgan-meyoriy-huquqiy-hujjatlar"
        exact
        component={LostItsPower}
      />
      <Route path="/:lang/statistika" exact component={Statistika} />
      <Route
        path="/:lang/tahliliy-malumotlar"
        exact
        component={AnalyticalData}
      />
      <Route
        path="/:lang/zarur-hujjatlar"
        exact
        component={RequiredDocuments}
      />
      <Route
        path="/:lang/barkamol-avlod-bolalar-markazlari"
        exact
        component={ChildrenCenters}
      />

      <Route path="/:lang/:page" exact component={TheRestOfThePage} />
      <Route path="/:lang/:page/:info" exact component={AllPageInfo} />
      <Redirect to="/uz" />
    </Switch>
  );
};

export default Routes;
