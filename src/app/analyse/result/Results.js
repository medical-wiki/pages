"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import irLogic1 from "../irLogic1";
import GetUrlParams from "../GetUrlParams";

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

  return (
    <div className="flex flex-col items-center justify-between p-8">
      <AnalysedResults />
      <br></br>
      <button onClick={() => {
        router.push(`/analyse?ins0=${formData.insuline0}&ins60=${formData.insuline60}&ins120=${formData.insuline120}&g0=${formData.glucose0}&g60=${formData.glucose60}&g120=${formData.glucose120}`)
        }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Корекция</button>
    </div>
  )
}

export default Results;




