// history.jsx

import React, { useState } from "react";
import "../../styles/history.css";
import Footer from "../../components/footer/footer";
import useSlideAnimation from "../../animation/useSlideAnimation";
import Collapsible from "../../components/collapsible/collapsible";
import Modal from "../../components/modal/modal";

function History() {
    useSlideAnimation();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const openModal = (src, alt) => {
    setModalImage(src);
    setModalAlt(alt);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container-fluid">
      <header className="text-center">
        <h1 className="blog-title">HISTORY OF CALLIGRAPHY</h1>
      </header>
      <div className="blog-content">
        <section className="blog-section">
          <h2>Calligraphy Styles</h2>
          <p>
            Calligraphy, derived from the Greek words "kallos" (beauty) and
            "graphia" (writing), is the art of beautiful handwriting. It has
            evolved over centuries and across cultures, with each region
            developing its unique styles and techniques. The origins of
            calligraphy date back to ancient civilizations such as China and
            Egypt, where it was used for sacred texts and important documents.
            Calligraphy is not only an artistic expression but also a meditative
            practice that requires patience, precision, and creativity.
          </p>
        </section>
        <Collapsible title="Western Calligraphy">
          <p>
            Western calligraphy has its roots in Roman and medieval European
            scripts. It evolved from the Latin alphabet and was primarily used
            by monks in monasteries to transcribe religious texts. Western
            calligraphy styles include:
          </p>
          <ul>
            <div>
              <li>
                <strong>
                  <h3>Uncial Script</h3>
                </strong>
                <h5>History and Origin:</h5>
                <p>
                  Uncial script emerged in the 4th century AD during the Roman
                  Empire and continued to be widely used until the 8th century.
                  It evolved from earlier Roman scripts and was primarily used
                  by Christian monks in monasteries for transcribing religious
                  texts, including the Bible. The rounded, simple shapes of
                  Uncial made it highly readable, and its uniform appearance was
                  ideal for copying important manuscripts.
                </p>
                <h5>Evolution in Modern Times:</h5>
                <p>
                  In modern times, Uncial script is appreciated for its
                  historical significance and aesthetic qualities. It is often
                  used in calligraphy for decorative purposes, in artworks, and
                  for creating historically inspired documents. Uncial script
                  remains a popular choice for greeting cards, invitations, and
                  logos that seek to evoke a sense of ancient tradition and
                  elegance.
                </p>
              </li>
              <div className="image-container" onClick={() => openModal("https://i0.wp.com/thepostmansknock.com/wp-content/uploads/2014/03/Albrecht_Calligraphy_Interview-17-of-20.jpg?resize=736%2C560&ssl=1", "Uncial Script")}>
                <img src="https://i0.wp.com/thepostmansknock.com/wp-content/uploads/2014/03/Albrecht_Calligraphy_Interview-17-of-20.jpg?resize=736%2C560&ssl=1" alt="Uncial Script" />
              </div>
            </div>

            <div>
              <li>
                <strong>
                  <h3>Carolingian Minuscule</h3>
                </strong>
                <h5>History and Origin:</h5>
                <p>
                  Carolingian minuscule was developed in the 8th century during
                  the reign of Charlemagne as part of his efforts to standardize
                  writing across the Holy Roman Empire. This script was created
                  by Alcuin of York and his scribes at the court of Charlemagne
                  in Aachen. It was designed to be highly legible and uniform,
                  facilitating easier reading and copying of texts.
                </p>
                <h5>Evolution in Modern Times:</h5>
                <p>
                  Carolingian minuscule significantly influenced the development
                  of later European scripts and became the basis for modern
                  lowercase letters. In contemporary calligraphy, Carolingian
                  minuscule is admired for its clarity and elegance. It is
                  frequently used in educational materials to teach historical
                  calligraphy and in projects aiming to replicate medieval
                  manuscripts.
                </p>
              </li>
              <div className="image-container" onClick={() => openModal("https://i.pinimg.com/originals/07/4f/76/074f768b1b8fb3d93f12d29d301aab9c.jpg", "Carolingian Minuscule")}>
                <img
                  src="https://i.pinimg.com/originals/07/4f/76/074f768b1b8fb3d93f12d29d301aab9c.jpg"
                  alt="Carolingian Minuscule"
                />
              </div>
            </div>

            <div>
              <li>
                <strong>
                  <h3>Gothic Script</h3>
                </strong>
                <h5>History and Origin:</h5>
                <p>
                  Gothic script, also known as Blackletter, emerged in the 12th
                  century and became the dominant script in Western Europe
                  during the late Middle Ages. It was characterized by its
                  dense, angular shapes and dramatic contrast between thick and
                  thin strokes. Gothic script was widely used in religious
                  manuscripts, legal documents, and early printed books.
                </p>
                <h5>Evolution in Modern Times:</h5>
                <p>
                  Despite being replaced by more legible scripts during the
                  Renaissance, Gothic script has retained its appeal in modern
                  times. It is often used in typographic designs, tattoos, and
                  logos to convey a sense of history, tradition, and formality.
                  Gothic script is also popular in blackletter typefaces used in
                  newspaper mastheads and certificates.
                </p>
              </li>
              <div className="image-container" onClick={() => openModal("https://i.pinimg.com/originals/c0/4c/32/c04c32c5d14ae22b2372e4529d83a9fa.jpg", "Gothic Script")}>
                <img
                  src="https://i.pinimg.com/originals/c0/4c/32/c04c32c5d14ae22b2372e4529d83a9fa.jpg"
                  alt="Gothic Script"
                />
              </div>
            </div>

            <div>
              <li>
                <strong>
                  <h3>Italic Script</h3>
                </strong>
                <h6>History and Origin:</h6>
                <p>
                  Italic script was developed in the early 16th century during
                  the Italian Renaissance. It was popularized by the
                  calligrapher Ludovico Vicentino degli Arrighi and printer
                  Aldus Manutius. Italic script is characterized by its slanted,
                  cursive forms, which were designed to be more fluid and faster
                  to write than earlier, more formal scripts.
                </p>
                <h6>Evolution in Modern Times:</h6>
                <p>
                  Italic script has continued to influence modern handwriting
                  and typography. It is commonly used in calligraphy for formal
                  invitations, wedding stationery, and certificates. The
                  script’s elegance and readability make it a favorite for
                  artistic projects and personal correspondence. Italic
                  typefaces remain a staple in printing and digital fonts, used
                  to add emphasis and distinction in texts.
                </p>
              </li>
              <div className="image-container" onClick={() => openModal("https://i.pinimg.com/originals/e6/49/94/e6499413869bed7ec0accf9f1d2e9397.png", "Italic Script")}>
                <img
                  src="https://i.pinimg.com/originals/e6/49/94/e6499413869bed7ec0accf9f1d2e9397.png"
                  alt="Italic Script"
                />
              </div>
            </div>
          </ul>
        </Collapsible>
        <Collapsible title="Arabic Calligraphy">
          <p>
            Arabic calligraphy is an essential aspect of Islamic art, reflecting
            the language's importance in the Quran and other religious texts. It
            is highly regarded for its aesthetic beauty and spiritual
            significance. Key styles of Arabic calligraphy include:
          </p>
          <ul>
            <div>
              <li>
                <strong>
                  <h3>Kufic Script</h3>
                </strong>
                <h6>History and Origin:</h6>
                <p>
                  Kufic script is one of the earliest forms of Arabic
                  calligraphy, originating in the city of Kufa in Iraq during
                  the 7th century. It is known for its bold, geometric shapes
                  and angular lines. Kufic was primarily used for writing the
                  Quran and for architectural inscriptions in early Islamic art.
                </p>
                <h6>Evolution in Modern Times:</h6>
                <p>
                  In modern times, Kufic script is celebrated for its historical
                  and aesthetic value. It is often used in decorative art, such
                  as in mosque architecture, textiles, and coins. Contemporary
                  artists and calligraphers use Kufic to create modern
                  interpretations of traditional designs, blending ancient
                  techniques with new artistic expressions.
                </p>
              </li>
              <div className="image-container" onClick={() => openModal("https://www.calligraphyqalam.com/wordpress/wp-content/uploads/2021/07/qur-0089-fol-001b-2a-768x602.jpg", "Kufic Script")}>
                <img
                  src="https://www.calligraphyqalam.com/wordpress/wp-content/uploads/2021/07/qur-0089-fol-001b-2a-768x602.jpg"
                  alt="Kufic Script"
                />
              </div>
            </div>

            <div>
              <li>
                <strong>
                  <h3>Naskh Script</h3>
                </strong>
                <h6>History and Origin:</h6>
                <p>
                  Naskh script was developed in the 10th century and quickly
                  became one of the most popular scripts for writing Arabic due
                  to its legibility and elegance. It was widely adopted for
                  copying the Quran and other texts, replacing the earlier Kufic
                  script. Naskh's rounded, flowing letters made it suitable for
                  everyday use.
                </p>
                <h6>Evolution in Modern Times:</h6>
                <p>
                  Naskh script continues to be a foundational style in modern
                  Arabic calligraphy and typography. It is used in books,
                  newspapers, and digital media due to its readability. Many
                  modern Arabic typefaces are based on Naskh, making it one of
                  the most recognizable and widely used scripts in the Arab
                  world.
                </p>
              </li>
              <div className="image-container" onClick={() => openModal("https://www.calligraphyqalam.com/wordpress/wp-content/uploads/2021/07/1-04-713.19.32-677x1024.jpg", "Naskh Script")}>
                <img
                  src="https://www.calligraphyqalam.com/wordpress/wp-content/uploads/2021/07/1-04-713.19.32-677x1024.jpg"
                  alt="Naskh Script"
                />
              </div>
            </div>

            <div>
              <li>
                <strong>
                  <h3>Thuluth Script</h3>
                </strong>
                <h6>History and Origin:</h6>
                <p>
                  Thuluth script was developed in the 9th century and is known
                  for its large, elegant letters with pronounced curves and
                  extended vertical lines. It was often used for monumental
                  inscriptions and decorative art. Thuluth script is considered
                  one of the most beautiful and sophisticated Arabic scripts.
                </p>
                <h6>Evolution in Modern Times:</h6>
                <p>
                  Thuluth script remains a popular choice for architectural
                  inscriptions, especially in mosques, as well as for Quranic
                  verses and artistic works. Its dramatic and flowing lines make
                  it a favorite for modern calligraphers who seek to create
                  visually striking compositions. Thuluth is also used in logos
                  and branding to convey a sense of grandeur and tradition.
                </p>
              </li>
              <div className="image-container" onClick={() => openModal("https://www.calligraphyqalam.com/wordpress/wp-content/uploads/2021/07/976_qur-0413-50b-51a-768x495.jpg", "Thuluth Script")}>
                <img
                  src="https://www.calligraphyqalam.com/wordpress/wp-content/uploads/2021/07/976_qur-0413-50b-51a-768x495.jpg"
                  alt="Thuluth Script"
                />
              </div>
            </div>

            <div>
              <li>
                <strong>
                  <h3>Diwani Script</h3>
                </strong>
                <h6>History and Origin:</h6>
                <p>
                  Diwani script was created during the Ottoman Empire in the
                  16th century and is known for its decorative and intricate
                  style. It was used primarily for official documents and royal
                  decrees due to its elaborate and ornate nature. Diwani script
                  features tightly interwoven letters and flourishes.
                </p>
                <h6>Evolution in Modern Times:</h6>
                <p>
                  Today, Diwani script is admired for its artistic complexity
                  and beauty. It is often used in calligraphy for creating
                  intricate designs, invitations, and decorative pieces. Modern
                  calligraphers continue to explore and innovate within the
                  Diwani style, blending traditional techniques with
                  contemporary aesthetics.
                </p>
              </li>
              <div className="image-container" onClick={() => openModal("https://i.pinimg.com/originals/30/b9/7a/30b97a500526a4dc89c67422b9028f5a.jpg", "Diwani Script")}>
                <img src="https://i.pinimg.com/originals/30/b9/7a/30b97a500526a4dc89c67422b9028f5a.jpg" alt="Diwani Script" />
              </div>
            </div>
          </ul>
        </Collapsible>
        <Collapsible title="Oriental Calligraphy">
          <p>
            Oriental calligraphy encompasses the writing traditions of East
            Asian cultures, particularly Chinese, Japanese, and Korean
            calligraphy. These styles emphasize the harmony of form and meaning,
            often integrating poetry and visual art. Prominent styles include:
          </p>
          <ul>
            <li>
              <div className="subheader"><strong >Chinese Calligraphy</strong></div>: Rooted in ancient Chinese
              culture, it is divided into five main script styles:
            </li>
            <ul>
              <div>
                <li>
                  <strong>
                    <h3>Seal Script (Zhuanshu)</h3>
                  </strong>
                  <h6>History and Origin:</h6>
                  <p>
                    Seal script, also known as Zhuanshu, is one of the oldest
                    Chinese scripts, dating back to the Shang Dynasty (c.
                    1600–1046 BCE). It was originally used for inscriptions on
                    bronze vessels and oracle bones. Seal script is
                    characterized by its intricate, rounded characters that
                    resemble seals or stamps.
                  </p>
                  <h6>Evolution in Modern Times:</h6>
                  <p>
                    In modern times, Seal script is primarily used for artistic
                    purposes and in traditional Chinese seals. It is appreciated
                    for its historical significance and decorative quality.
                    Calligraphers often use Seal script in artworks, scrolls,
                    and seals, preserving its ancient charm while exploring new
                    creative expressions.
                  </p>
                </li>
                <div className="image-container" onClick={() => openModal("https://www.christies.com/img/LotImages/2014/HGK/2014_HGK_03365_1648_000(feng_kanghou_calligraphy_in_seal_script033755).jpg?mode=max", "Seal Script")}>
                  <img src="https://www.christies.com/img/LotImages/2014/HGK/2014_HGK_03365_1648_000(feng_kanghou_calligraphy_in_seal_script033755).jpg?mode=max" alt="Seal Script" />
                </div>
              </div>

              <div>
                <li>
                  <strong>
                    <h3>Clerical Script (Lishu)</h3>
                  </strong>
                  <h6>History and Origin:</h6>
                  <p>
                    Clerical script, or Lishu, developed during the Han Dynasty
                    (206 BCE – 220 CE). It was used for official documents and
                    everyday writing, replacing the more complex Seal script.
                    Clerical script is characterized by its flat, wide strokes
                    and structured forms.
                  </p>
                  <h6>Evolution in Modern Times:</h6>
                  <p>
                    Clerical script remains an important style in Chinese
                    calligraphy and is often studied by calligraphy students for
                    its historical and technical significance. It is used in
                    artworks, inscriptions, and educational materials. Modern
                    calligraphers appreciate Clerical script for its clarity and
                    balance, often incorporating it into contemporary designs.
                  </p>
                </li>
                <div className="image-container" onClick={() => openModal("https://media.mutualart.com/Images/2022_05/15/22/221815837/31b5502b-2f00-45a9-abf4-0013df62fd41.Jpeg?w=768", "Clerical Script")}>
                  <img src="https://media.mutualart.com/Images/2022_05/15/22/221815837/31b5502b-2f00-45a9-abf4-0013df62fd41.Jpeg?w=768" alt="Clerical Script" />
                </div>
              </div>

              <div>
                <li>
                  <strong>
                    <h3>Regular Script (Kaishu)</h3>
                  </strong>
                  <h6>History and Origin:</h6>
                  <p>
                    Regular script, or Kaishu, emerged during the late Han
                    Dynasty and became the standard form of Chinese writing by
                    the Tang Dynasty (618–907 CE). It is characterized by its
                    balanced, precise strokes and clear structure, making it
                    highly legible.
                  </p>
                  <h6>Evolution in Modern Times:</h6>
                  <p>
                    Regular script continues to be the most widely used style in
                    Chinese calligraphy, both in traditional brush calligraphy
                    and modern digital fonts. It is the script taught in schools
                    and used in official documents, books, and everyday writing.
                    Regular script's enduring popularity is due to its
                    readability and versatility.
                  </p>
                </li>
                <div className="image-container" onClick={() => openModal("https://en.chinaculture.org/img/2003-09/24/wenzi22_01.jpg", "Regular Script")}>
                  <img src="https://en.chinaculture.org/img/2003-09/24/wenzi22_01.jpg" alt="Regular Script" />
                </div>
              </div>

              <div>
                <li>
                  <strong>
                    <h3>Running Script (Xingshu)</h3>
                  </strong>
                  <h6>History and Origin:</h6>
                  <p>
                    Running script, or Xingshu, developed as a semi-cursive
                    style that allows for faster writing while maintaining
                    readability. It emerged during the Han Dynasty and became
                    popular during the Jin Dynasty (265–420 CE). Running script
                    strikes a balance between Regular and Cursive scripts.
                  </p>
                  <h6>Evolution in Modern Times:</h6>
                  <p>
                    Running script is widely used in personal correspondence,
                    artistic calligraphy, and casual writing. Its fluid and
                    connected strokes make it a favorite among calligraphers who
                    value speed and expressiveness. Running script is often
                    employed in modern calligraphy to create dynamic and lively
                    compositions.
                  </p>
                </li>
                <div className="image-container" onClick={() => openModal("https://cantorcollection.stanford.edu/Media/Previews/1989/1989.107_CDP-web.png", "Running Script")}>
                  <img src="https://cantorcollection.stanford.edu/Media/Previews/1989/1989.107_CDP-web.png" alt="Running Script" />
                </div>
              </div>

              <div>
                <li>
                  <strong>
                    <h3>Cursive Script (Caoshu)</h3>
                  </strong>
                  <h6>History and Origin:</h6>
                  <p>
                    Cursive script, or Caoshu, is the most freeform and
                    expressive style of Chinese calligraphy. It originated
                    during the Han Dynasty and evolved into its current form by
                    the Tang Dynasty. Cursive script is characterized by its
                    flowing, often abstract characters and rapid brushstrokes.
                  </p>
                  <h6>Evolution in Modern Times:</h6>
                  <p>
                    Cursive script is used primarily for artistic expression and
                    personal communication. Modern calligraphers appreciate its
                    spontaneity and emotional impact, often using it to create
                    powerful and dynamic artworks. Cursive script's abstract
                    nature allows for great creativity and individuality.
                  </p>
                </li>
                <div className="image-container" onClick={() => openModal("http://en.chinaculture.org/img/2003-09/24/wenzi21_01.jpg", "Cursive Script")}>
                  <img src="http://en.chinaculture.org/img/2003-09/24/wenzi21_01.jpg" alt="Cursive Script" />
                </div>
              </div>
            </ul>
            <li>
              <div className="subheader"><strong >Japanese Calligraphy (Shodo)</strong></div>: Influenced by
              Chinese calligraphy, Japanese calligraphy emphasizes the beauty of
              simplicity and the flow of brushstrokes. Key styles include:
            </li>
            <ul>
              <div>
                <li>
                  <strong>
                    <h3>Kaisho</h3>
                  </strong>
                  <h6>History and Origin:</h6>
                  <p>
                    Kaisho, or "block script," is a formal style of Japanese
                    calligraphy similar to the Regular Script in Chinese
                    calligraphy. It was developed during the Tang Dynasty and
                    adopted in Japan for official and formal writing. Kaisho is
                    characterized by its clear, precise strokes.
                  </p>
                  <h6>Evolution in Modern Times:</h6>
                  <p>
                    Kaisho remains a foundational style in Japanese calligraphy,
                    often taught to beginners to instill the basics of brush
                    control and stroke order. It is used in formal documents,
                    certificates, and educational materials. Kaisho's clarity
                    and structure make it a popular choice for both traditional
                    and modern calligraphy projects.
                  </p>
                </li>
                <div className="image-container" onClick={() => openModal("https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_767/v1619442047/content-items/007/780/368/Screen%2520Shot%25202021-04-21%2520at%25205.52.01%2520PM-original.png?1619442047", "Kaisho")}>
                  <img src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_767/v1619442047/content-items/007/780/368/Screen%2520Shot%25202021-04-21%2520at%25205.52.01%2520PM-original.png?1619442047" alt="Kaisho" />
                </div>
              </div>

              <div>
                <li>
                  <strong>
                    <h3>Gyosho</h3>
                  </strong>
                  <h6>History and Origin:</h6>
                  <p>
                    Gyosho, or "semi-cursive script," is a style of Japanese
                    calligraphy that balances clarity and speed. It evolved from
                    Kaisho to allow for faster writing while maintaining
                    readability. Gyosho features smoother, more connected
                    strokes than Kaisho.
                  </p>
                  <h6>Evolution in Modern Times:</h6>
                  <p>
                    Gyosho is commonly used in personal correspondence, informal
                    documents, and artistic calligraphy. Its fluidity and
                    elegance make it a favorite among calligraphers who seek to
                    create graceful yet legible compositions. Gyosho is also
                    used in modern graphic design and digital typography.
                  </p>
                </li>
                <div className="image-container" onClick={() => openModal("https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_767/v1619442394/content-items/007/780/394/Screen%2520Shot%25202021-04-21%2520at%25205.50.03%2520PM-original.png?1619442394", "Gyosho")}>
                  <img src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_767/v1619442394/content-items/007/780/394/Screen%2520Shot%25202021-04-21%2520at%25205.50.03%2520PM-original.png?1619442394" alt="Gyosho" />
                </div>
              </div>

              <div>
                <li>
                  <strong>
                    <h3>Sosho</h3>
                  </strong>
                  <h6>History and Origin:</h6>
                  <p>
                    Sosho, or "cursive script," is the most expressive and
                    flowing style of Japanese calligraphy. It developed from
                    Gyosho and is characterized by its rapid, sweeping
                    brushstrokes. Sosho allows for great freedom and creativity
                    in writing.
                  </p>
                  <h6>Evolution in Modern Times:</h6>
                  <p>
                    Sosho is primarily used for artistic expression and informal
                    communication. Modern calligraphers value Sosho for its
                    dynamic and spontaneous nature, often using it to create
                    abstract and emotive artworks. Sosho's bold and freeform
                    strokes make it a popular choice for contemporary
                    calligraphy.
                  </p>
                </li>
                <div className="image-container" onClick={() => openModal("https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_767/v1619442117/content-items/007/780/371/Screen%2520Shot%25202021-04-21%2520at%25205.50.10%2520PM-original.png?1619442117", "Sosho")}>
                  <img src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_767/v1619442117/content-items/007/780/371/Screen%2520Shot%25202021-04-21%2520at%25205.50.10%2520PM-original.png?1619442117" alt="Sosho" />
                </div>
              </div>
            </ul>
            <li>
              <div className="subheader"><strong>Korean Calligraphy (Seoye)</strong></div>: Like Japanese
              calligraphy, Korean calligraphy is influenced by Chinese
              traditions but has developed unique characteristics. Styles
              include:
            </li>
            <ul>
              <div>
                <li>
                  <strong>
                    <h3>Jeonseo</h3>
                  </strong>
                  <h6>History and Origin:</h6>
                  <p>
                    Jeonseo, or "seal script," is a formal style of Korean
                    calligraphy similar to the Chinese Seal Script. It has been
                    used since ancient times for inscriptions on official seals
                    and documents. Jeonseo is characterized by its intricate,
                    formal characters.
                  </p>
                  <h6>Evolution in Modern Times:</h6>
                  <p>
                    Jeonseo is used primarily for artistic purposes and in
                    traditional Korean seals. Modern calligraphers appreciate
                    its historical significance and decorative quality. Jeonseo
                    is often incorporated into artworks, calligraphic designs,
                    and official seals.
                  </p>
                </li>
                <div className="image-container" onClick={() => openModal("https://i0.wp.com/www.dramasrok.com/wp-content/uploads/2020/06/korean-calligraphy-hangul-sojeon.jpg?w=273&ssl=1", "Jeonseo")}>
                  <img src="https://i0.wp.com/www.dramasrok.com/wp-content/uploads/2020/06/korean-calligraphy-hangul-sojeon.jpg?w=273&ssl=1" alt="Jeonseo" />
                </div>
              </div>

              <div>
                <li>
                  <strong>
                    <h3>Haeseo</h3>
                  </strong>
                  <h6>History and Origin:</h6>
                  <p>
                    Haeseo, or "regular script," is a standard style of Korean
                    calligraphy used for formal writing. It evolved from the
                    Chinese Regular Script and is characterized by its clear,
                    structured strokes. Haeseo has been used for official
                    documents, books, and inscriptions.
                  </p>
                  <h6>Evolution in Modern Times:</h6>
                  <p>
                    Haeseo remains a fundamental style in Korean calligraphy,
                    widely used in education, official documents, and artistic
                    works. Its clarity and readability make it a popular choice
                    for both traditional and modern calligraphy. Haeseo is also
                    used in digital fonts and graphic design.
                  </p>
                </li>
                
              </div>

              <div>
                <li>
                  <strong>
                    <h3>Choseo</h3>
                  </strong>
                  <h6>History and Origin:</h6>
                  <p>
                    Choseo, or "cursive script," is the most expressive and
                    fluid style of Korean calligraphy. It developed from Haeseo
                    to allow for faster writing and greater artistic expression.
                    Choseo is characterized by its flowing, dynamic lines.
                  </p>
                  <h6>Evolution in Modern Times:</h6>
                  <p>
                    Choseo is used primarily for artistic purposes and personal
                    communication. Modern calligraphers value Choseo for its
                    spontaneity and emotive power, often using it to create
                    abstract and dynamic artworks. Choseo's fluid and freeform
                    strokes make it a popular choice for contemporary
                    calligraphy projects.
                  </p>
                </li>
            
              </div>
            </ul>
          </ul>
        </Collapsible>
      </div>
      <footer className="blog-footer">
        <p>
          Calligraphy remains a cherished art form across cultures, embodying
          the beauty of language and the skill of the human hand. Stylish
          Strokes celebrates this timeless tradition by offering a platform for
          enthusiasts to explore, learn, and appreciate the diverse styles of
          calligraphy from around the world.
        </p>
      </footer>
      <Footer />
      <Modal src={modalImage} alt={modalAlt} isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}

export default History;
