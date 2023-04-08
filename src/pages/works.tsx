import styles from "@/styles/Works.module.scss";
import Link from "next/link";
import { useEffect } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Works() {
  useEffect(() => {
    document.title = "Works";
  }, []);
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Works</h1>
        <div className={styles.container}>
          <Link
            className={styles.work}
            href="https://metalife.co.jp/"
            target="_blank"
          >
            <img src="/001.webp" className={styles.work__image} alt="" />
            <div className={styles.work__text__wrapper}>
              <div className={styles.work__title}>MetaLife</div>
              <div className={styles.work__detail}>
                インターン先で開発・運営しているバーチャルオフィスです。
              </div>
            </div>
          </Link>
          <Link
            className={styles.work}
            href="https://thecreator.be/ja"
            target="_blank"
          >
            <img src="/002.webp" className={styles.work__image} alt="" />
            <div className={styles.work__text__wrapper}>
              <div className={styles.work__title}>TheCreator</div>
              <div className={styles.work__detail}>
                クリエイターへ暗号資産で定額支援できるサービスです。
                <br />
                友人と共同開発しており、フロントを少しだけ手伝いました。
              </div>
            </div>
          </Link>
          <Link className={styles.work} href="/">
            <img src="/003.webp" className={styles.work__image} alt="" />
            <div className={styles.work__text__wrapper}>
              <div className={styles.work__title}>Portfolio</div>
              <div className={styles.work__detail}>
                このポートフォリオです。
              </div>
            </div>
          </Link>
          <Link className={styles.work} href="./works">
            <img src="/004.webp" className={styles.work__image} alt="" />
            <div className={styles.work__text__wrapper}>
              <div className={styles.work__title}>SplatCentral</div>
              <div className={styles.work__detail}>
                スプラトゥーン3の大会管理・進行アプリです。
                <br />
                D-MeNTION様にご協賛いただき現在開発中です。夏頃に完成予定です。
              </div>
            </div>
          </Link>
          <Link className={styles.work} href="./works">
            <img src="/005.webp" className={styles.work__image} alt="" />
            <div className={styles.work__text__wrapper}>
              <div className={styles.work__title}>Swee</div>
              <div className={styles.work__detail}>
                サブスクをスマホから簡単に始めることができるサブスク支援サービスです。
                <br />
                友人と共同開発しており、4月ごろリリース予定です。
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
