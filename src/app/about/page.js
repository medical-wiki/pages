
const FaqItem = ({ q, a }) => {
  return (
    <>
       <p className="">
        <div className="font-mono font-bold"> {q} </div>
        {a}
      </p>
      <br></br>
      </>
  );
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
    <div className=" justify-between p-8 max-w-5xl justify-center">      

    <FaqItem id="w1" q= "Тази страница е направена и поддържана от:" a="еди кой си"/>

    
    <FaqItem id="w1" q= "За да се свържете с нас, посетете" a="ввв.каруца.кон"/>


    </div>
    </main>
  )
}
