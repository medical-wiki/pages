"use client";
import React, { useState } from "react";
import GetUrlParams from "./getUrlParams";

const InputForm = ({ SubmitButton }) => {

  const [formData, setFormData] = useState(GetUrlParams());


  const handleFocus = (event) => event.target.select();
  const Input = (props) => <input type="text" value="Some something" onFocus={handleFocus} />

  const handleInput = (e) => {
    const fieldName = e.target.id;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="justify-between p-8 max-w-5xl justify-center">
          <label >Анализ на резултати от изследвания за кръвна захар (глюкоза) и серумен инсулин по метода ОГТТ: Орален глюкозо-толерансен тест.
            Този анализ е направен от изкуствен итнелект, следователно не може да се гарантира неговата безгрешност.
          </label>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <h1>Мерна единица (инсулин):</h1>
        <div className="flex grid gap-2 mb-2 md:grid-cols-3">

          <div className="flex items-center mr-4">
            <input defaultChecked id="inline-2-radio" type="radio" value="" name="inline-radio-group1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">mU/L</label>
          </div>
          <div className="flex items-center mr-4">
            <input id="inline-2-radio" type="radio" value="" name="inline-radio-group1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">uU/mL</label>
          </div>
          <div className="flex items-center">
            <input disabled id="inline-disabled-radio" type="radio" value="" name="inline-radio-group1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label  className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">pmol/L</label>
          </div>
        </div>

        <br></br>
        <h1>Инсулин:</h1>
        <div className="grid gap-2 mb-2 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">0 min</label>
            <input type="number" id="insuline0" onChange={handleInput} onFocus={handleFocus} value={formData.insuline0} step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">60 min</label>
            <input type="number" id="insuline60" onChange={handleInput} onFocus={handleFocus} value={formData.insuline60} placeholder="5.21 mU/L" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">120 min</label>
            <input type="number" id="insuline120" onChange={handleInput} onFocus={handleFocus} value={formData.insuline120} placeholder="5.21 mU/L" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">180 min</label>
            <input disabled type="number" id="insuline180"  value={0} step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>
        <br></br>
        <h1>Мерна единица (глюкоза):</h1>
        <div className="flex grid gap-2 mb-2 md:grid-cols-2">

          <div className="flex items-center mr-4">
            <input defaultChecked id="inline-2-radio" type="radio" value="" name="inline-radio-group2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">mmol/L</label>
          </div>
          <div className="flex items-center">
            <input disabled id="inline-disabled-radio" type="radio" value="" name="inline-radio-group2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">ng/mL</label>
          </div>
        </div>
        <h1>Глюкоза:</h1>
        <div className="grid gap-2 mb-2 md:grid-cols-2">
          <div>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">0 min</label>
            <input type="number" id="glucose0" onChange={handleInput} onFocus={handleFocus} value={formData.glucose0} step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">60 min</label>
            <input type="number" id="glucose60" onChange={handleInput} onFocus={handleFocus} value={formData.glucose60} step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">120 min</label>
            <input type="number" id="glucose120" onChange={handleInput} onFocus={handleFocus} value={formData.glucose120} step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">180 min</label>
            <input disabled type="number" id="glucose180" value={0} placeholder="4.97 mmol/L" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <br></br>
        </div>
         {<SubmitButton data={formData}/>}
      </div>
    </>
  )
}

export default InputForm;