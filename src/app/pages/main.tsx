import style from "../styles/main.module.css"

export default function Main() {
  return (
    <div className={style["main-page"]}>
      <div className={style["Top"]}>nav</div>
      <div className={style["box-wrapper"]}>
        <div className={style["box-line"]}>
          <div className={style["greetings-box"]}>picture and hello</div>
          <div className={style["right-nested-box"]}>
            <div className={style["moving-phrase"]}>moving phrase</div>
            <div className={style["credentials-and-portfolio"]}>
              <div className={style["c-and-p-box"]}>1</div>
              <div className={style["c-and-p-box"]}>portfolio</div>
            </div>
          </div>
        </div>
        <div className={style["box-line-s"]}>
            <div className={style["cv-box"]}>cv box</div>
            <div className={style["offered-services-box"]}>services</div>
            <div className={style["profiles-box"]}>profile</div>
        </div>
        <div className={style["box-line-s"]}>
            <div className={style["statistic-and-notes"]}>statistic</div>
            <div className={style["statistic-and-notes"]}>note</div>
        </div>
      </div>
      <div className={style["Bottom"]}>bottom</div>
    </div>
  );
}
