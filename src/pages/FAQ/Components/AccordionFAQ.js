import Accordion from "react-bootstrap/Accordion";
import styles from "./AccordionFAQ.module.scss";

function AccordionFAQ() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Як придбати квиток онлайн?</Accordion.Header>
        <Accordion.Body className={styles.text}>
          Ви можете придбати квиток на сайті кінотеатру, обравши фільм, сеанс та
          місця у залі. Після оплати електронний квиток буде надіслано на вашу
          електронну пошту.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Чи можна оплатити квиток готівкою?</Accordion.Header>
        <Accordion.Body className={styles.text}>
          Так, квитки можна придбати в касі кінотеатру та оплатити готівкою або
          карткою.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Як використовувати електронний квиток?
        </Accordion.Header>
        <Accordion.Body className={styles.text}>
          Під час входу до кінозалу достатньо показати QR-код квитка з екрана
          смартфона або пред’явити роздрукований квиток.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          Чи можна повернути або обміняти квиток?
        </Accordion.Header>
        <Accordion.Body className={styles.text}>
          Так, повернення квитка можливе не пізніше ніж за 1 годину до початку
          сеансу. Обмін можливий за умови наявності вільних місць.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Що робити, якщо сеанс скасували?</Accordion.Header>
        <Accordion.Body className={styles.text}>
          У разі скасування або перенесення сеансу ви отримаєте повне повернення
          коштів або зможете обрати інший сеанс.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          Чи є знижки для дітей, студентів та пенсіонерів?
        </Accordion.Header>
        <Accordion.Body className={styles.text}>
          Так, у кінотеатрі діють знижки на окремі сеанси. Деталі уточнюйте на
          сайті або в касі.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>
          Чи можна прийти до кінотеатру зі своєю їжею?
        </Accordion.Header>
        <Accordion.Body className={styles.text}>
          Згідно з правилами кінотеатру, приносити власну їжу та напої
          заборонено. У нашому барі ви можете придбати попкорн, напої та інші
          снеки.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>
          Чи можна забронювати квиток без оплати?
        </Accordion.Header>
        <Accordion.Body className={styles.text}>
          Ні, бронювання місць без оплати не передбачено. Квитки можна придбати
          одразу на сайті або в касі.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Що робити, якщо я загубив квиток?</Accordion.Header>
        <Accordion.Body className={styles.text}>
          Якщо ви придбали квиток онлайн, його можна знайти у вашій електронній
          пошті або в особистому кабінеті на сайті кінотеатру.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionFAQ;
