import { Heading1 } from "../../../componentz/TextComponents"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className=" justify-between p-8 max-w-5xl justify-center">
        <Heading1 id="pot">Защо съществува тази страница:</Heading1>
        Главната цел на тази страница е да <span className="font-medium">подпомогне диагнозата и лечението </span>
        на проблеми, свързани с метаболитни нарушения. <span className="font-medium"> Авторът на материалите тук НЕ Е ЛЕКАР </span>
        и следователно не претендира за точност при диагностика, още по-малко има за цел предписване на каквото и да е лечение.
        С други думи, най-главната подбуда за систематизиране на информацията тук е <span className="font-medium"> даване на възможни идеи </span>
         за последващи изследвания при доказани и отговорни медицински лица.
        <br></br>
        <br></br>
        <Heading1 id="pot">Връзка с автора:</Heading1>
        За препоръки, за корекция на грешки и неточности, (както и за похвали и хейт), моля пишете на 
         <span className="font-medium"> elken@abv.bg</span>

      </div>
    </main>
  )
}
