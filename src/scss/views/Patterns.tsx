import MainWrapper from "../wrappers/MainWrapper.tsx";
import "../style.scss";

const Patterns = () => {
  return (
    <MainWrapper>
      <div className={styles.container}>
        <h1 className={`livvic-black ${styles.title}`}>Título</h1>
        <p className={`livvic-light ${styles.paragraph}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className={`livvic-thin ${styles.button}`}>Botón</button>
      </div>
    </MainWrapper>
  );
};

export default Patterns;
