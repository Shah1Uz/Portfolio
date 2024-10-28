import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Bizning qulayliklar : <span className="purple">Innovatsion loyihalar , Sifatli kodlar , Zamonaviy dizaynlar , Integrallashgan tizimlar , 50-dan oshiq xizmatlar . 
.</span>
             <span className="purple"> </span>
            <br />
            Zamonaviy dasturlash tillari (PHP, MySQL, HTML5, CSS3, JS) orqali yozilgan ishlanmalarimizni barchasi siz uchun albatta manzur keladi. Sifatli kodlar bilan saytingizni ko'rkam qilishingiz va xavfsiz bo'lishi uchun bizga ishonch bildirishingiz mumkin.
            <br />
            Siz uchun ham trenddagi logolar, coverlar, ijtimoiy tarmoqlar uchun SMM posterlar, mobil ilovalar, veb saytlar uchun dizaynlar, bannerlar, flayerlar, vizitkalar yoki animatsion roliklar tayyorlash kerak bo'lsa albatta sizga yordam beramiz.
            <br />
            <br />
            Roziqulov.Sh innovatsion xizmatlar markazi 4 yil mobaynida 300 dan oshiq Veb saytlar, Telegram botlar, SMM ishlanmalari, SEO ishlanmalari, Grafik dizayn ishlanmalari  professional tarzda ishlab chiqishgan.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Vebsitelar 300 dan ortiq 
            </li>
            <li className="about-activity">
              <ImPointRight /> Telegram botlar 100 dan ortiq 
            </li>
            <li className="about-activity">
              <ImPointRight /> Grafik dizaynlar 20 dan ortiq 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Farq qiladigan narsalarni qurishga intiling!"{" "}
          </p>
          <footer className="blockquote-footer">Roziqulov.Sh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
