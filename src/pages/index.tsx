import Navbar from "@/components/Header/Navbar";
import style from "../components/Header/style.module.css";

export default function Home() {
  return (
    <div className={style.dark}>
      <Navbar />
    </div>
  );
}
