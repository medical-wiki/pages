"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import irLogic1 from "../irLogic1";
import GetUrlParams from "../getUrlParams";
import InsulinChart from "./InsulinChart";

const Results = () => {

  const formData = GetUrlParams();
  const router = useRouter();
  const result = irLogic1(formData);

  const AnalysedResults = () => (
    <>
      {result.analysedResults.map((one, ind) => {
        return (
          <label key={ind} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {one != null ? <>{one}</> : <></>}
          </label>
        )
      })}
    </>
  );
console.log(result);
  return (
    <div className="flex flex-col items-center justify-between p-2">
      <AnalysedResults />
      <br></br>
      <span className="text-blue-500">Вашата КЗ</span> 
      <span className="text-red-700">Вашият инсулин</span>
      <span className="text-green-400">идеална стойност за инсулин (за сравнение)</span>
      <InsulinChart values={formData}></InsulinChart>
      <button onClick={() => {
        router.push(`/analyse/ir?ins0=${formData.insulin0}&ins60=${formData.insulin60}&ins120=${formData.insulin120}&g0=${formData.glucose0}&g60=${formData.glucose60}&g120=${formData.glucose120}`)
        }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Корекция</button>
    </div>
  )
}

export default Results;




