import styles from "./LocationSection.module.scss";

function LocationSection() {
  return (
    <section className={styles.locationSection}>
      <div className="container">
        <div className={styles.locationContainer}>
          <h2>
            Як нас <span className="text-primary-blue">знайти</span>
          </h2>
          <p>
            EpicVision розташований у самому серці Києва, на вулиці Хрещатик,
            25. Легко дістатися з будь-якої точки міста. Поруч ви знайдете кафе,
            ресторани та інші місця для приємного відпочинку після сеансу.
            Ідеальне місце для того, щоб провести час з друзями або родиною.
          </p>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2540.815815152585!2d30.5221719!3d50.4445313!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce55d0276e59%3A0xb03fd0a90c6de69a!2z0YPQuy4g0JrRgNC10YnQsNGC0LjQuiwgMjUsINCa0LjQtdCyLCAwMTAwMQ!5e0!3m2!1sru!2sua!4v1740073695416!5m2!1sru!2sua"
            width="600"
            title="Карта розташування кінотеатру EpicVision"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
