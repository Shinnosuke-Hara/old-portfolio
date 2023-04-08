import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { useEffect } from "react";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function Home() {
  useEffect(() => {
    document.title = "s.hara's Portpolio";
  }, []);

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>s.hara's Portpolio</h1>
        <div className={styles.skill__wrapper}>
          <Link href="https://www.typescriptlang.org/" target="_blank">
            <img src="/ts.svg" alt="" className={styles.skill} />
          </Link>
          <Link href="https://react.dev/" target="_blank">
            <img src="/react.svg" alt="" className={styles.skill} />
          </Link>
          <Link href="https://nextjs.org/" target="_blank">
            <img src="/next.svg" alt="" className={styles.skill} />
          </Link>
        </div>
        <div className={styles.grid}>
          <Link className={styles.card} href="./works">
            <h2 className={styles.headline}>
              Works <span className={styles.arrow}>-&gt;</span>
            </h2>
            <p className={styles.text}>
              今まで作ったものや現在取り組んでいるものを書いています。
            </p>
          </Link>

          <Link className={styles.card} href="./career">
            <h2 className={styles.headline}>
              Career <span className={styles.arrow}>-&gt;</span>
            </h2>
            <p className={styles.text}>簡単な経歴を書いています。</p>
          </Link>

          <Link className={styles.card} href="./contact">
            <h2 className={styles.headline}>
              Contact <span className={styles.arrow}>-&gt;</span>
            </h2>
            <p className={styles.text}>何かあればこちらからお願いします。</p>
          </Link>

          <Link className={styles.card} href="/">
            <h2 className={styles.headline}>
              Blog <span className={styles.arrow}>-&gt;</span>
            </h2>
            <p className={styles.text}>そのうちあげます。</p>
          </Link>
        </div>
      </main>
    </>
  );
}
