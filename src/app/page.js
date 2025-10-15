import React from "react";
import Image from "next/image";
import { BackgroundLines } from "@/components/ui/background-lines";
import Card from "@/components/ui/card";
import thunder from "../icons/thunder.svg";
import input from "../icons/input.svg";
import ai from "../icons/ai.svg";
import check from "../icons/check.svg";
import line from "../icons/line.svg";
import star from "../icons/star.svg";
import search from "../icons/search.svg";
import tracker from "../icons/tracker.svg";
import code from "../icons/code.svg";
import documment from "../icons/documment.svg";
import trace from "../icons/trace.svg";
import lamp from "../icons/lamp.svg";
import bright from "../icons/bright.svg";
import insight from "../icons/insight.svg";
import baseline from "../icons/baseline.svg";
import timer from '../icons/timer.svg'

export default function Home() {
  return (
    <main>
      <BackgroundLines className="flex items-center justify-center w-full flex-col">
        <div
          className="bg-[#E8D9D5] px-2 py-1 rounded-3xl border border-solid flex gap-2"
          style={{ borderColor: "#A56A58" }}
        >
          <Image
            src={thunder}
            alt="Descrição da imagem"
            height={15}
            className="rounded-lg"
          />
          <h2>Inteligência Artificial para JVM</h2>
        </div>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2  relative z-20 font-bold tracking-tight">
          JFlux
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-xl text-neutral-700 dark:text-neutral-400 text-center font-bold">
          IA que entende sua JVM
        </p>
        <section className="flex gap-2 my-2">
          <div className="border border-solid rounded-xl px-2 py-1">RAG</div>
          <div className="border border-solid rounded-xl px-2 py-1">LLMS</div>
          <div className="border border-solid rounded-xl px-2 py-1">JVM</div>
        </section>
      </BackgroundLines>
      <section>
        <div className="flex flex-wrap p-16 w-full text-center justify-center gap-8">
          {[
            {
              image: input,
              title: "Entrada do usuário",
              text1:
                "O desenvolvedor descreve o problema ou contexto de análise.",
            },
            {
              image: check,
              title: "Coleta inteligente",
              text1: "O sistema localiza e processa dados de",
              text2: "logs, código e documentação técnica.",
            },
            {
              image: search,
              title: "Análise vetorial e contextual (RAG)",
              text1: "Busca e compreende trechos",
              text2: "relevantes sobre o problema.",
            },
            {
              image: ai,
              title: "Agentes especializados",
              text1: "Inteligência distribuída em módulos que",
              text2: "analisam logs, código e teoria.",
            },
            {
              image: star,
              title: "Solução automatizada",
              text1: "Recomendações técnicas e exemplos",
              text2: "de código prontos para aplicar.",
            },
          ].map(({ image, title, text1, text2 }, i, arr) => (
            <div key={i} className="flex items-center gap-4">
              <Card image={image} title={title} text1={text1} text2={text2} />
              {i !== arr.length - 1 && (
                <Image src={line} width={50} alt="linha separadora" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2  relative z-20 font-bold tracking-tight">
          Sobre o JFlux
        </h2>
      </section>
      <section className="min-h-screen flex items-center justify-center flex-col">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2  relative z-20 font-bold tracking-tight">
          Otimize. <span style={{ color: "#A56A58" }}>Analise.</span> Evolua.
        </h2>
        <h2
          style={{ color: "#808080" }}
          className="text-center bg-clip-text text-transparent text-center bg-gradient-to-b  text-xl font-semibold tracking-tight"
        >
          Plataforma inteligente de análise e otimização de aplicações Java.{" "}
          <br />
          IA que identifica <span style={{ color: "#202020" }}>gargalos</span>,
          correlaciona <span style={{ color: "#202020" }}>código</span> e gera{" "}
          <span style={{ color: "#202020" }}>recomendações</span> automáticas.
        </h2>
      </section>
      <section className="min-h-screen flex items-center justify-center flex-col">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2  relative z-20 font-bold tracking-tight">
          Agentes Especializados
        </h2>
        <h2
          style={{ color: "#808080" }}
          className="text-center bg-clip-text text-transparent text-center bg-gradient-to-b  text-xl font-semibold tracking-tight"
        >
          Inteligência distribuída em módulos que trabalham em conjunto
        </h2>
        <div className="flex flex-wrap p-16 w-full text-center justify-center gap-8">
          <Card
            image={tracker}
            title="TraceLog Agent"
            text1="Analisa métricas e logs de execução, detectando"
            text2="anomalias em latência, heap, GC e threads."
          />
          <Card
            image={code}
            title="Code Agent"
            text1="Correlaciona código-fonte e gargalos de"
            text2="performance para identificar pontos críticos."
          />
          <Card
            image={documment}
            title="TraceLog Agent"
            text1="Consulta documentação e literatura técnica para"
            text2="reforçar o diagnóstico."
          />
          <Card
            image={lamp}
            title="TraceLog Agent"
            text1="Sintetiza tudo em relatório com explicações,"
            text2="recomendações e exemplos de código."
          />
        </div>
      </section>
      <section className="min-h-screen flex items-center justify-center flex-col">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2  relative z-20 font-bold tracking-tight">
          Por que o JFlux é diferente
        </h2>
        <h2
          style={{ color: "#808080" }}
          className="text-center bg-clip-text text-transparent text-center bg-gradient-to-b  text-xl font-semibold tracking-tight"
        >
          Com JFlux, <span style={{ color: "#A56A58" }}>performance</span> vira{" "}
          <span style={{ color: "#A56A58" }}>vantagem competitiva.</span>
        </h2>
        <div className="flex flex-wrap p-16 w-full text-center justify-center gap-8">
          <Card
            image={bright}
            title="IA Real"
            text1="Combina embeddings semânticos, bancos"
            text2="vetoriais e LLMs para entender contexto técnico."
          />
          <Card
            image={trace}
            title="Análise Contextual"
            text1="Correlaciona logs, código e documentação de"
            text2="forma automática e inteligente."
          />
          <Card
            image={insight}
            title="Insights Acionáveis"
            text1="Não apenas explica o problema — mostra como"
            text2="resolver com exemplos práticos."
          />
          <Card
            image={baseline}
            title="Evolutivo"
            text1="Aprende com cada análise e refina"
            text2="recomendações futuras continuamente."
          />
        </div>
      </section>
      <section
        className="min-h-screen flex items-center justify-center flex-col gap-5"
        style={{ position: "relative" }}
      >
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2  relative z-20 font-bold tracking-tight">
          A cada 1 semana nós <br />
          atualizamos esta página
        </h2>
        <div className="flex flex-row justify-center items-center px-5 py-2 gap-[10px] bg-[rgba(165,106,88,0.25)] border-[2px] border-[#A56A58] rounded-3xl">
          <Image src={timer}></Image>
          <p className="text-center font-semibold">
            Próxima atualização em: <br />
            06 dias 23 horas 14 minutos
          </p>
        </div>

        <p style={{ color: "#808080" }}>Status:</p>
        <button
          className="bg-[#E8D9D5] px-3 py-1 rounded-xl"
          style={{ color: "#A56A58" }}
        >
          Ver detalhes da atualização
        </button>
        <div
          style={{ position: "absolute", bottom: "16px" }}
          className="flex flex-col gap-1 items-center"
        >
          <button
            className="px-3 py-2 rounded-3xl cursor-pointer"
            style={{ backgroundColor: "#EDE1DE", color: "#ffff" }}
          >
            Receber notificaçao via email
          </button>
          <p style={{ color: "#808080" }}>EM BREVE</p>
        </div>
      </section>
    </main>
  );
}
