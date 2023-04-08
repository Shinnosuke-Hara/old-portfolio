import styles from "@/styles/Career.module.scss";
import classNames from "classnames";
import { useEffect } from "react";

export default function Career() {
  useEffect(() => {
    document.title = "Career";
  }, []);

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Career</h1>
        <div className={styles.timeline}>
          <div className={styles.line}></div>
          <div className={styles.wrapper}>
            <div className={classNames(styles.container)}>
              <div className={styles.circle}>
                <div className={styles.circle__text__wrapper}>
                  <div className={styles.circle__text}>2021年4月</div>
                  <div className={styles.text}>慶應義塾大学入学</div>
                  <div className={styles.detail}>
                    夢と希望を持って慶應義塾大学に入学しました。
                  </div>
                </div>
              </div>
              <div className={styles.circle}>
                <div className={styles.circle__text__wrapper}>
                  <div className={styles.circle__text}>2021年6月</div>
                  <div className={styles.text}>インターン (ライター)</div>
                  <div className={styles.detail}>
                    幅広い分野の記事を書きました。
                  </div>
                </div>
              </div>
              <div className={styles.circle}>
                <div className={styles.circle__text__wrapper}>
                  <div className={styles.circle__text}>2021年11月</div>
                  <div className={styles.text}>インターン (エンジニア)</div>
                  <div className={styles.detail}>
                    プログラミングを始めます。
                  </div>
                </div>
              </div>
              <div className={styles.circle}>
                <div className={styles.circle__text__wrapper}>
                  <div className={styles.circle__text}>2022年11月</div>
                  <div className={styles.text}>業務委託</div>
                  <div className={styles.detail}>
                    個人で業務委託などを受注し始めます。
                  </div>
                </div>
              </div>
              <div className={styles.circle}>
                <div className={styles.circle__text__wrapper}>
                  <div className={styles.circle__text}>2023年〜</div>
                  <div className={styles.text}>個人開発</div>
                  <div className={styles.detail}>
                    インターンに加えて友人と個人開発をしています。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
