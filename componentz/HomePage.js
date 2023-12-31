import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image'
import healthImage from '../public/health.png'

const inter = Inter({ subsets: ['latin'] })

const Item = ({ title, href, info }) => {
  return (
    <div className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30">
      <Link href={href}>  <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
        {title}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      </Link>
      <p className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}>
        {info}
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <br></br>
      <br></br>
      <div className="flex h-screen3 w-full3 bg-blu4e-400 justify-center items-center3">
        <Image
          src={healthImage}
          width={230}
          height={230}
        />
      </div>
      <main className="flex min-h-screen flex-col items-center p-8 ">
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-center gap-6 max-w-5xl">
          <br></br>

          <span>За пациенти с инсулинова резистентност и метаболитни нарушения.
          </span>
        </div>
        <br></br>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-center">
          {/* <Item href="/news" title="Новини" info="новости, статии" /> */}
          {/* <Item href="/" disabled title="Симптоми" info="въпроси и отговори" /> */}
          <Item href="/faq" title="Теория" info="въпроси и отговори" />
          {/* <Item href="/diary" title="Дневник" info="хранителен дневник" /> */}
          <Item href="/analyse/ir" title="Анализ" info="анализ на изследвания с изкуствен интелект" />
          {/* <Item href="/drugs" title="Лекарства" info="мнения и препоръки" /> */}
          {/* <Item href="/doctors" title="Лекари" info="мнения и препоръки" /> */}
          <Item href="/about" title="Още" info="инфо за тази страница" />
        </div>
      </main>
    </div>
  )
}
