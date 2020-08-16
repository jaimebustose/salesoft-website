import React from "react";

export default function SolutionCard() {
  return (
    <div className="w-3/4 flex flex-col text-center mx-auto py-10">
      <h2 className="font-poppins font-medium text-4xl text-neutral-700 my-5">
        Nuestras soluciones
      </h2>
      <div className="my-auto flex items-center m-3">
        <div className=" flex-initial w-2/3 text-left">
          <h2 className="font-poppins font-medium text-2xl  text-neutral-700">
            Sitio E-commerce Premium
          </h2>
          <p className="font-open text-neutral-300 my-4 max-w-md">
            Todos tus productos en un espacio personalizado e ideado para
            maximizar al máximo tus ventas.
          </p>
          <button className="font-open font-medium bg-neutralv-800 py-2 px-6 my-5 rounded-md text-white">
            Solicitar
          </button>
        </div>
        <div className="w-1/3">
          <img src="/res/ecommerce_premium.svg"></img>
        </div>
      </div>
    </div>
  );
}
