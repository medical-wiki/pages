import { Heading1 } from "../../../componentz/TextComponents"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className=" justify-between p-8 max-w-5xl justify-center">
        <Heading1 id="pot">Защо съществува тази страница:</Heading1>
        Главната цел на тази страница е да <span className="font-medium">подпомогне диагнозата и лечението </span>
        на проблеми, свързани с метаболитни нарушения. Информацията тук е с цел <span className="font-medium"> даване на възможни идеи </span>
        за последващи изследвания при доказани и отговорни медицински лица.
        <br></br>
        <span className="font-medium"> Създателят на тази страница НЕ Е ЛЕКАР </span>
        и следователно не претендира за адекватност при диагнози, още по-малко има за цел предписване на каквото и да е лечение.
        <br></br>
        <br></br>
        <Heading1 id="pot">Връзка с автора:</Heading1>
        За препоръки, за корекция на грешки и неточности, (както и за похвали и хейт), моля пишете на
        <span className="font-medium"> elken@abv.bg</span>

      </div>
    </main>
  )
}
