import styles from "./AdventagesSection.module.scss";
import AdventageCard from "../../components/AdventageCard/AdventageCard";

function AdventagesSection() {
  return (
    <section className={styles.adventagesSection}>
      <div className="container">
        <div className={styles.adventagesContainer}>
          <h2 className="text-primary-blue text-extraBold">
            EpicVision – це більше, ніж просто кінотеатр
          </h2>
          <ul className={styles.adventagesList}>
            <li>
              <AdventageCard
                header="Передові технології"
                text="лазерні проектори, об’ємний звук Dolby Atmos
              і 4K-якість, щоб кожен кадр був ідеальним."
              />
            </li>
            <li>
              <AdventageCard
                header="Затишок та стиль"
                text="комфортні крісла, продуманий дизайн та атмосфера, яка дозволяє
              повністю зануритися у фільм."
              />
            </li>

            <li>
              <AdventageCard
                header="Великий вибір"
                text="блокбастери, авторське кіно, фестивальні покази і спеціальні
              події."
              />
            </li>
            <li>
              <AdventageCard
                header="Зручність"
                text="онлайн-бронювання квитків, знижки для постійних гостей і завжди
              доступні акції."
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AdventagesSection;
