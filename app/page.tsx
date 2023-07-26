import Styles from "./page.module.css";
import Hero from "@/component/hero";

export default function Home() {
  return (
    <div className={Styles.main}>
      <Hero />
      Hello World
    </div>
  );
}
