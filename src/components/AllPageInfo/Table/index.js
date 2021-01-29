import React from "react";
import "./index.scss";

const arr = [
  {
    id: 1,
    fullName: "Sh.X.Shermatov",
    works: "Xalq ta`limi vaziri - Hay`at raisi",
  },
  {
    id: 2,
    fullName: "U.U.Sharifxodjayev",
    works: "Xalq ta`limi vaziri birinchi o`rinbosari",
  },
  {
    id: 3,
    fullName: "",
    works:
      "Umumiy oʻrta taʼlim muassasalari faoliyatini muvofiqlashtirish boshqarmasi boshligʻi",
  },
  {
    id: 4,
    fullName: "E.E.Muradov",
    works:
      "Oʻquv jarayonini metodik jihatdan taʼminlashni rivojlantirish boshqarmasi boshligʻi",
  },
  {
    id: 5,
    fullName: "",
    works: "Kadrlar bilan ishlash boshqarmasi boshlig`i",
  },
  {
    id: 6,
    fullName: "A.R.Tagaev",
    works: "Ma`naviy-ahloqiy tarbiya boshqarmasi boshlig`i",
  },
];

const Table = () => {
  return (
    <div className="allpageinfo-tabe-container">
      <div className="allpageinfo-tabe-content">
        <table>
          <tr>
            <th>T/r</th>
            <th>F.I.Sh.</th>
            <th>Ish joyi va lavozimi</th>
          </tr>
          {arr.map((item) => (
            <tr key={item.id}>
              <td>{item.id}.</td>
              <td>{item.fullName}</td>
              <td>{item.works}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Table;
