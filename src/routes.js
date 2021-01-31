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
import EmbassyOfTheRepublic from "./layouts/EmbassyOfTheRepublic";
import EGovernment from "./layouts/E-Government";
import RceivedCommands from "./layouts/RceivedCommands";
import StateProgram from "./layouts/StateProgram";
import Vacancies from "./layouts/Vacancies";
import Choices from "./layouts/Choices";
import PlansForOpenMeetings from "./layouts/PlansForOpenMeetings";
import InvestmentPotential from "./layouts/InvestmentPotential";
import ForForeignCitizens from "./layouts/ForForeignCitizens";
import LostCertificate from "./layouts/LostCertificate";
import ForExternalExamination from "./layouts/ForExternalExamination";
import FromOneInstitution from "./layouts/FromOneInstitution";
import OpenData from "./layouts/OpenData";
import PressReleases from "./layouts/PressReleases";
import OressConferences from "./layouts/OressConferences";
import FrequentlyAskedQuestions from "./layouts/FrequentlyAskedQuestions";
import Accreditation from "./layouts/Accreditation";
import TransparencyOfMinistry from "./layouts/TransparencyOfMinistry";

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
      <Route
        path="/:lang/vazirlik-ishtirokidagi-xalqaro-shartnomalar"
        exact
        component={EmbassyOfTheRepublic}
      />
      <Route
        path="/:lang/elektron-hukumat-tizimida"
        exact
        component={EGovernment}
      />
      <Route
        path="/:lang/korrupsiyaga-qarshi-kurash"
        exact
        component={RceivedCommands}
      />
      <Route path="/:lang/davlat-dasturlari" exact component={StateProgram} />
      <Route path="/:lang/bosh-ish-orinlari" exact component={Vacancies} />
      <Route path="/:lang/tanlovlar" exact component={Choices} />
      <Route
        path="/:lang/ochiq-majlislar-otkazish-rejalari"
        exact
        component={PlansForOpenMeetings}
      />
      <Route
        path="/:lang/investitsiya-salohiyati"
        exact
        component={InvestmentPotential}
      />
      <Route
        path="/:lang/bolalarini-maktabga-joylashtirish"
        exact
        component={ForForeignCitizens}
      />
      <Route
        path="/:lang/yoqolgan-shahodatnomani-tiklash-uchun-ariza-berish"
        exact
        component={LostCertificate}
      />
      <Route
        path="/:lang/eksternat-imtihon-uchun-ariza-berish"
        exact
        component={ForExternalExamination}
      />
      <Route
        path="/:lang/oquvchilarni-bitta-talim-muassasasidan-boshqasiga-otkazish"
        exact
        component={FromOneInstitution}
      />
      <Route path="/:lang/open-data" exact component={OpenData} />
      <Route path="/:lang/press-relizlar" exact component={PressReleases} />
      <Route
        path="/:lang/matbuot-anjumanlari"
        exact
        component={OressConferences}
      />
      <Route
        path="/:lang/kop-beriladigan-savollar"
        exact
        component={FrequentlyAskedQuestions}
      />
      <Route path="/:lang/accreditation" exact component={Accreditation} />
      <Route path="/:lang/openness" exact component={TransparencyOfMinistry} />

      <Route path="/:lang/:page" exact component={TheRestOfThePage} />
      <Route path="/:lang/:page/:info" exact component={AllPageInfo} />
      <Redirect to="/uz" />
    </Switch>
  );
};

export default Routes;
