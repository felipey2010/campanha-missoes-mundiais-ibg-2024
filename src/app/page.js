import { BG_01 } from "images";
import Image from "next/image";


export default function Home() {
  return (
    <main className="h-svh w-svw">
      <div className="w-full flex justify-center">
        <span>Mas receberão poder quando o Espírito Santo descer sobre vocês, e serão minhas testemunhas em Jerusalém, em toda a Judéia e Samaria, e até os confins da terra".</span>
        <span>Atos 1:8</span>
      </div>
      <div className="w-full h-full relative"><Image width={1000} height={1000} src={BG_01} alt="imagem de grupo de pessoas" className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-transparent"/></div>
    </main>
  );
}
