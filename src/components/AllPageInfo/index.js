import React from "react";
import { useParams, useLocation } from "react-router-dom";
import "./index.scss";

// import small components
import Image from "./Image";
import Table from "./Table";
import Text from "./Text";
import Title from "./Title";
import Video from "./Video";
import ShareLink from "../ShareLink";
import MenuTitle from "../MenuTitle";
import MyLink from "./Link";

const AllPageInfo = () => {
  const location = useLocation();
  const {
    imageIsRequired,
    tableIsRequired,
    textIsRequired,
    titleIsRequired,
    videoIsRequired,
    LinkIsRequired,
  } = location.state[0];
  return (
    <div className="allpageinfo-container">
      <MenuTitle title="O'ZBEKISTON RESPUBLIKASI XALQ TA`LIMI VAZIRLIGI" />
      <div className="allpageinfo-content">
        {imageIsRequired && (
          <Image
            imgUrl="https://www.uzedu.uz/uploads/2019/11/rasmij-760x500.jpg"
            ImageName="Rasim"
            dateNumber="23"
            dateTitle="July"
          />
        )}
        {LinkIsRequired && (
          <MyLink
            textUrl="https://nrm.uz/contentf?doc=538256_o%E2%80%98zbekiston_respublikasining_03_04_2018_y_o%E2%80%98rq-467-son_talim_fan_va_madaniyat_masalalari_bo%E2%80%98yicha_islom_tashkiloti_ustavini_(boku_2015_yil_26_noyabr)_ratifikaciya_qilish_to%E2%80%98g%E2%80%98risidagi_qonuni_(qonunchilik_palatasi_tomonidan_06_03_2018_y_qabul_qilingan_senat_tomonidan_29_03_2018_y_maqullangan)&products=1_vse_zakonodatelstvo_uzbekistana"
            textArea="“Taʼlim, fan va madaniyat masalalari boʻyicha islom tashkiloti ustavini (Boku, 2015 yil 26 noyabr) ratifikatsiya qilish toʻgʻrisida“gi Oʻzbekiston Respublikasi Qonuni"
          />
        )}
        {titleIsRequired && <Title />}
        {textIsRequired && <Text />}
        {videoIsRequired && (
          <Video videoUrl="blob:https://www.youtube.com/7b3acd61-1add-41df-8645-bfd2e574fa42" />
        )}
        {tableIsRequired && <Table />}
        <ShareLink />
      </div>
    </div>
  );
};

export default AllPageInfo;
