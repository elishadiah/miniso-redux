import React from "react";
import StoreCard from "./StorePageCard";
const StorePage = ({ noTitle = false }) => {
  const stores = [
    {
      id: 1,
      title: "Guatemala",
      text1: "Pradera Concepción",
      //text2: "Ann Arbor, MI 48108",
      timeText: "Abierto de 9:00 AM a 8:00 p.m",
      image:
        "https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin/Miniso+Pradera+Concepci%C3%B3n.jpg",
    },
    {
      id: 2,
      title: "Guatemala",
      text1: "Oakland Mall",
      // text2: "Belleve, WA 98004",
      timeText: "Abierto de 9:00 AM a 8:00 p.m",
      image:
        "https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin/Miniso+Oakland+Mall.jpg",
    },
    {
      id: 3,
      title: "Quetzaltenango",
      text1: "Pradera Xela",
      //text2: "Nashua, NH 03060",
      timeText: "Abierto de 9:00 AM a 8:00 p.m",
      image:
        "https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin/Miniso+Xela+.jpg",
    },
    {
      id: 4,
      title: "Guatemala",
      text1: "Sankris Mall",
      //text2: "Ann Arbor, MI 48108",
      timeText: "Abierto de 9:00 AM a 8:00 p.m",
      image:
        "https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin/Miniso+Sankris+Mall.jpg",
    },
    {
      id: 5,
      title: "Guatemala",
      text1: "Parque Las Américas",
      // text2: "Belleve, WA 98004",
      timeText: "Abierto de 9:00 AM a 8:00 p.m",
      image:
        "https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin/Miniso+Parque+Las+Am%C3%A9ricas.jpg",
    },
    {
      id: 6,
      title: "Guatemala",
      text1: "Naranjo Mall",
      //text2: "Nashua, NH 03060",
      timeText: "Abierto de 9:00 AM a 8:00 p.m",
      image:
        "https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin/Miniso+Naranjo+Mall.jpg",
    },
    {
      id: 7,
      title: "Chimaltenango",
      text1: "Pradera Chimaltenango",
      //text2: "Nashua, NH 03060",
      timeText: "Abierto de 9:00 AM a 8:00 p.m",
      image:
        "https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin/Miniso+Chimaltenango.jpg",
    },
    {
      id: 8,
      title: "Guatemala",
      text1: "C.C. La Estación",
      //text2: "Nashua, NH 03060",
      timeText: "Abierto de 9:00 AM a 8:00 p.m",
      image:
        "https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin/Miniso+La+Estaci%C3%B3n.jpg",
    },
    {
      id: 9,
      title: "Guatemala",
      text1: "C.C. La Eskala Roosvelt",
      //text2: "Nashua, NH 03060",
      timeText: "Abierto de 9:00 AM a 8:00 p.m",
      image: "https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin/3.png",
    },
    {
      id: 10,
      title: "Guatemala",
      text1: "RUS Mall",
      //text2: "Nashua, NH 03060",
      timeText: "Abierto de 9:00 AM a 8:00 p.m",
      image:
        "https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin/Miniso+Rus+Mall.jpg",
    },
    {
      id: 11,
      title: "Guatemala",
      text1: "SPAZIO",
      //text2: "Nashua, NH 03060",
      timeText: "Abierto de 9:00 AM a 8:00 p.m",
      image:
        "https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin/Miniso+Spazio.jpg",
    },
    {
      id: 11,
      title: "Guatemala",
      text1: "C.C. Metrocentro",
      //text2: "Nashua, NH 03060",
      timeText: "Abierto de 9:00 AM a 8:00 p.m",
      image:
        "https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin/Miniso+Metrocentro.JPG",
    },
    {
      id: 12,
      title: "Zacapa",
      text1: "Pradera Zacapa",
      //text2: "Nashua, NH 03060",
      timeText: "Abierto de 9:00 AM a 8:00 p.m",
      image:
        "https://minisobbs.s3.us-east-2.amazonaws.com/Zoho-admin/Miniso+Zacapa.jpg",
    },
  ];
  return (
    <div style={{ backgroundColor: "#ebebeb", padding: "90px 0" }}>
      <div className="container">
        {!noTitle && (
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              marginBottom: "70px",
            }}
          >
            Tiendas
          </h2>
        )}

        <div className="row">
          {stores.map((item) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-xxl-3 pb-4"
              key={Math.random()}
            >
              <StoreCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorePage;
