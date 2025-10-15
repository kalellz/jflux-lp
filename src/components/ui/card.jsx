import Image from "next/image";

export default function Card({ image, title, text1, text2 }) {
  return (
    <main>
      <div className="flex w-full h-full text-center">
        <div className="flex flex-col gap-2 items-center px-8 py-16 w-[480px] max-w-full border-2 border-gray-300/50 shadow-[2px_2px_25px_rgba(0,_0,_0,_0.1)] rounded-[24px]">
          <Image
            src={image}
            alt="Descrição da imagem"
            width={100}
            className="rounded-lg"
          />
          <h1 className="from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl font-bold">
            {title}
          </h1>
          <p className="font-semibold text-gray-300">
            {text1}
            <br />
            {text2}
          </p>
        </div>
      </div>
    </main>
  );
}
