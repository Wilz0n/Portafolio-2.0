import React from "react";
import Frist_colum from "./frist-colum/frist-colum";
import Second_colum from "./second-colum/second-colum";
import Third_colum from "./third-colum/third-colum";

function Home_maquetado() {
  return (
    <main
      lang="en"
      className="max-w-sm sm:max-w-3xl lg:max-w-5xl px-4 mx-auto flex flex-col lg:grid w-full h-full grid-cols-8 gap-4 py-30 box text-[#E2E2E2] overflow-hidden"
    >
      <Frist_colum />
      <Second_colum />
      <Third_colum />
    </main>
  );
}

export default Home_maquetado;

