import React from 'react';
import "./Style.scss";
import { useParams } from 'react-router-dom';

function ChancerDetail() {
   const cancerDetails = [
     {
       id: 1,
       title: "Mədə xərçəngi",
       sections: [
         {
           title: "Risk faktorları",
           type: "danger",
           items: ["H. pylori infeksiyası", "Duzlu qidalar", "Ailəvi anamnez"],
         },
         {
           title: "Simptomlar",
           type: "success",
           items: ["İştahsızlıq", "Ağrı", "Qara nəcis"],
         },
       ],
     },
     {
       id: 2,
       title: "Döş xərçəngi",
       sections: [
         {
           title: "Risk faktorları",
           type: "danger",
           items: ["Genetik", "Hormonal dəyişikliklər"],
         },
         {
           title: "Simptomlar",
           type: "success",
           items: ["Düyün, ağrı, dəridə dəyişiklik"],
         },
       ],
     },
   ];

    const { id } = useParams();
      const detail = cancerDetails.find((item) => item.id === Number(id));
    if (!detail) return <p>Məlumat tapılmadı</p>;
    

  return (
    <section id="cancer-detail">
      <div className="cancer-detail">
        <h1>{detail.title}</h1>
        {detail.sections.map((section, index) => (
          <div key={index} className={`section ${section.type}`}>
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChancerDetail;
