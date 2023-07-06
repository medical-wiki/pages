"use client";
import React from 'react';
import InputForm from "./inputForm"
import { useRouter } from 'next/navigation';

const SubmitButton = ({data}) => {
  const router = useRouter();
  return (
    <>
      <button onClick={() => {
        router.push(`/analyse/ir/result?ins0=${data.insuline0}&ins60=${data.insuline60}&ins120=${data.insuline120}&g0=${data.glucose0}&g60=${data.glucose60}&g120=${data.glucose120}`)
        }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Анализ</button>

    </>
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="min-h-screen">
        <br></br>
        <InputForm SubmitButton={SubmitButton} />
      </div>
    )
  }
}
export default Page;