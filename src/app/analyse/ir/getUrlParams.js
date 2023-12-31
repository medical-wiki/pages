import { useSearchParams } from 'next/navigation';
import { useState } from "react";

const GetUrlParams = () => {
  const searchParams = useSearchParams();

  const [formData] = useState({
    insulin0: searchParams.get('ins0') || 0,
    insulin60: searchParams.get('ins60') || 0,
    insulin120: searchParams.get('ins120') || 0,
    glucose0: searchParams.get('g0') || 0,
    glucose60: searchParams.get('g60') || 0,
    glucose120: searchParams.get('g120') || 0
  });
   return formData;
}

export default GetUrlParams;