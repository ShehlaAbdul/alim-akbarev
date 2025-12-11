import React from 'react';
import "./Style.scss";
import Arrow from "../../assets/icons/arrow.svg";

function Oncology() {
  const oncology = [
    {
      id: 1,
      title: "Əməliyyat öncəsi diaqnostika",
      shortDesc:
        "Xəstənin əməliyyata hazırlıq mərhələsində, müxtəlif müayinələr və testlər vasitəsilə xəstəliyin dəqiq diaqnozu qoyulur.",
      longDesc:
        "Onkologiyada diaqnostika prosesində məqsəd şişin mövcudluğunu aşkar etmək, onun bədxassəli (malign) və ya xoşxassəli (benign) olduğunu müəyyənləşdirmək, yayılma dərəcəsini (stadiasını) qiymətləndirmək və müalicə planını seçməkdir. Bu məqsədlə bir neçə əsas müayinə üsulundan istifadə olunur:",
    },
    {
      id: 2,
      title: "Əməliyyat öncəsi diaqnostika",
      shortDesc:
        "Xəstənin əməliyyata hazırlıq mərhələsində, müxtəlif müayinələr və testlər vasitəsilə xəstəliyin dəqiq diaqnozu qoyulur.",
      longDesc:
        "Onkologiyada diaqnostika prosesində məqsəd şişin mövcudluğunu aşkar etmək, onun bədxassəli (malign) və ya xoşxassəli (benign) olduğunu müəyyənləşdirmək, yayılma dərəcəsini (stadiasını) qiymətləndirmək və müalicə planını seçməkdir. Bu məqsədlə bir neçə əsas müayinə üsulundan istifadə olunur:",
    },
    {
      id: 3,
      title: "Əməliyyat öncəsi diaqnostika",
      shortDesc:
        "Xəstənin əməliyyata hazırlıq mərhələsində, müxtəlif müayinələr və testlər vasitəsilə xəstəliyin dəqiq diaqnozu qoyulur.",
      longDesc:
        "Onkologiyada diaqnostika prosesində məqsəd şişin mövcudluğunu aşkar etmək, onun bədxassəli (malign) və ya xoşxassəli (benign) olduğunu müəyyənləşdirmək, yayılma dərəcəsini (stadiasını) qiymətləndirmək və müalicə planını seçməkdir. Bu məqsədlə bir neçə əsas müayinə üsulundan istifadə olunur:",
    },
  ];
  return (
    <section id="oncology">
      <div className="oncology">
        <h1>Onkologiya</h1>
        <div className="row">
          {oncology.map((detail) => (
            <div className="col-12 col-lg-6">
              <div className="detail-card d-flex">
                <div className="text-side">
                  <h4>{detail.title}</h4>
                  <p>{detail.shortDesc}</p>
                </div>
                <div className="arrow">
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Oncology;
