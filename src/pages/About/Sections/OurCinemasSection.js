import styles from "./OurCinemasSection.module.scss";
import CinemasCarousel from "../../../components/CinemasCarousel/CinemasCarousel";

function OurCimenasSection() {
  return (
    <section className={styles.ourCimenasSection}>
      <div className="container">
        <div className={styles.ourCinemaContainer}>
          <h2 className={`${styles.title} text-primary-blue text-extraBold`}>
            Кожен зал – це унікальний простір для особливих вражень
          </h2>
          <CinemasCarousel />
        </div>
      </div>
    </section>
  );
}

export default OurCimenasSection;
