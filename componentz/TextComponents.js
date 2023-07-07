import Link from 'next/link'

export const Heading1 = ({ children, id }) => {
  return (
    <>
      <p></p>
      <br></br>
      <h1 id={id} className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl dark:text-white">{children}</h1>
    </>
  );
}

export const Link1 = ({ href, text, id }) => {
  return (
    <>
      <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={href}> {text} </Link>
    </>
  );
}

export const Red = ({ children, id }) => {
  return (
    <>
      <span id={id} className="font-medium text-red-700">{children}</span>
    </>
  );
}