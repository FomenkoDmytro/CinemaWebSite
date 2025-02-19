function OurCimenasSection() {
  return (
    <section className="section">
      <div className="container">
        <button>prev cinema</button>

        <article>
          <h2>
            У EpicVision кожен зал – це унікальний простір для особливих
            вражень:
          </h2>
          <ul>
            <li>
              <h3>Зал 1:</h3>{" "}
              <p>
                Великі екрани, розкішне зображення і звук, що захоплює – для
                перегляду найочікуваніших новинок.
              </p>
            </li>
            <li>
              <h3>Зал 2:</h3>{" "}
              <p>
                Інтимний зал для справжніх кіномеломанів, де кожен фільм стає
                подією.
              </p>
            </li>
            <li>
              <h3>Зал 3:</h3>{" "}
              <p>
                Мультимедійний простір для перегляду фільмів в форматах 3D і
                IMAX, який перенесе вас у новий вимір.
              </p>
            </li>
            <li>
              <h3>Зал 4:</h3>{" "}
              <p>
                Ідеальний для сімейних вечорів та дитячих сеансів, де кожен
                знайде щось для себе.
              </p>
            </li>
          </ul>
        </article>
        <button>next cinema</button>
      </div>
    </section>
  );
}

export default OurCimenasSection;
