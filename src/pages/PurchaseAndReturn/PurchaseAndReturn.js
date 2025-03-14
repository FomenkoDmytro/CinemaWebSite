import { useNavigate } from "react-router-dom";
import styles from "./Return.module.scss";
import { useState } from "react";
import ModalReturn from "./ReturnForm/ModalReturn";

function Return() {
  const navigate = useNavigate();
  const [ReturnFormShow, setReturnFormShow] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleClick = () => {
    setReturnFormShow(true);
  };

  return (
    <div className={`${styles.container} container`}>
      <h2 className={`${styles.title} text-primary-blue`}>
        Правила придбання та повернення квитків
      </h2>

      <h3>1. Придбання квитків</h3>
      <ul className={styles.list}>
        <li>Квитки можна придбати онлайн на сайті кінотеатру або в касах.</li>
        <li>
          Оплата здійснюється банківськими картами, електронними гаманцями або
          готівкою в касі.
        </li>
        <li>
          Після успішної оплати електронний квиток надсилається на вказану
          електронну пошту або стає доступним у особистому кабінеті.
        </li>
        <li>Квиток дійсний лише на зазначену дату, час та фільм.</li>
      </ul>

      <h3>2. Вхід до залу</h3>
      <ul className={styles.list}>
        <li>
          Для входу необхідно пред’явити електронний або роздрукований квиток із
          QR-кодом.
        </li>
        <li>Спізнення на сеанс не є підставою для повернення коштів.</li>
        <li>
          Адміністрація залишає за собою право відмовити у вході особам у стані
          алкогольного чи наркотичного сп’яніння.
        </li>
      </ul>

      <h3>3. Повернення та обмін квитків</h3>
      <ul className={styles.list}>
        <li>
          Повернення квитків можливе не пізніше, ніж за 1 годину до початку
          сеансу.
        </li>
        <li>
          Повернення коштів здійснюється на той самий спосіб оплати, яким було
          придбано квиток.
        </li>
        <li>
          Обмін квитка на інший сеанс можливий за умови наявності вільних місць.
        </li>
        <li>
          У разі скасування або перенесення сеансу кошти повертаються в повному
          обсязі.
        </li>
      </ul>

      <h3>4. Додаткові умови</h3>
      <ul className={styles.list}>
        <li>
          Акційні квитки та квитки за спеціальними пропозиціями поверненню не
          підлягають.
        </li>
        <li>
          У разі форс-мажорних обставин адміністрація кінотеатру залишає за
          собою право змінювати умови повернення квитків.
        </li>
      </ul>
      <p>
        Ці правила можуть змінюватися, тому рекомендуємо ознайомлюватися з
        актуальними умовами перед покупкою.
      </p>
      <div>
        <p className={`${styles.link} link`} onClick={handleClick}>
          Форма для оформлення заявки на повернення
        </p>
        <ModalReturn
          show={ReturnFormShow}
          onHide={() => setReturnFormShow(false)}
        />
      </div>
    </div>
  );
}

export default Return;
