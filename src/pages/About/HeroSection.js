import styles from "./HeroSection.module.scss";
function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.textContainer}>
          <h1 className={`${styles.title} text-primary-blue text-black`}>
            EpicVision
          </h1>
          <p>
            <span className="text-primary-blue text-bold">EpicVision </span> –
            це більше, ніж просто кінотеатр. Це місце, де магія кіно оживає
            перед вашими очима. Ми створюємо атмосферу, в якій кожен фільм стає
            емоційною подорожжю, а кожен сеанс – справжнім святом для всіх ваших
            відчуттів. Ласкаво просимо у світ, де кіно стає епічним!
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
