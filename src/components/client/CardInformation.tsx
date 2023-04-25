import Styles from "../../styles/cardInformation.module.css";

export interface ICardInformation {
  imageSrc: string;
  imageAlt: string;
  title: string | string[];
  subtitle: string | string[];
  paragraph: string | string[];
  listItems: string[];
}

function CardInformation(props: ICardInformation) {
  const { imageSrc, title, subtitle, paragraph, listItems } = props;
  return (
    <div className={Styles.information}>
      <img src={imageSrc} alt="Imagen project" />
      <div className={Styles.info}>
        <div className={Styles.title}>
          <h1>{title}</h1>
        </div>
        <div className={Styles.parragraph}>
          <p>{paragraph}</p>
        </div>
        <div className={Styles.subtitle}>
          <h2>{subtitle}</h2>
        </div>
        <div className={Styles.list}>
          {listItems && (
            <ul>
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardInformation;
