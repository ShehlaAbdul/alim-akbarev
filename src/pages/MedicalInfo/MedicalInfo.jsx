import React from "react";
import "./Style.scss";
import BreadCrumbBtn from "../../components/BreadCrumbBtn/BreadCrumbBtn";
import { GoArrowRight } from "react-icons/go";

function MedicalInfo() {
  const medicalInfoList = [
    {
      id: 1,
      title: "Onkoloji xəstə və yaxınlarının həkim ilə münasibəti",
    },
    {
      id: 2,
      title: "Psixo-Onkoloji Dəstək",
    },
    {
      id: 3,
      title:
        "Genetik testlərin xərçəng xəstəliyinin erkən diaqnostikasında önəmi varmı?",
    },
    {
      id: 4,
      title: "Cinsi həyat və kimyaterapiya",
    },
    {
      id: 5,
      title:
        "Düz bağırsaq şişlərinin əməliyyatından sonra görülə bilən pelvik taban sindromu nədir?",
    },
    {
      id: 6,
      title: "Xərçəng və texnologiya",
    },
    {
      id: 7,
      title: "Piylənmə ilə xərçəng arasında əlaqə",
    },
    {
      id: 8,
      title: "Kimyaterapiya sonrası görülən əl-ayaq sindromu haqqında",
    },
    {
      id: 9,
      title: "Xərçəng və qidalanma",
    },
    {
      id: 10,
      title: "Kimyaterapiyadan öncə və müalicə müddətində qidalanma",
    },
    {
      id: 11,
      title:
        "Xərçəng xəstələrində fiziki aktivlik necə olmalıdır? (yoqa, meditasiya)",
    },
    {
      id: 12,
      title: "Palyativ baxım nədir?",
    },
    {
      id: 13,
      title: "Xərçəngdən sonra hamiləlik",
    },
    {
      id: 14,
      title: "Süd vəzi xərçəngindən sonra əmizdirmə",
    },
  ];

  return (
    <>
      <BreadCrumbBtn />
      <section>
        <div className="medical-info ">
          <h2 className="title">Xəstələr üçün Tibbi Məlumatlar</h2>
          <div className="info-content">
            {medicalInfoList.map((info) => (
              <div key={info.id} className="info-item ">
                {" "}
                <div>
                  {" "}
                  <GoArrowRight className="arrow-icon" />
                </div>
                <p>{info.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MedicalInfo;
