import AnimatedSection from "@/components/AnimatedSection";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Знакомимся",
      text: "Обсуждаем ученика, его цели и то, что сейчас вызывает сложности.",
    },
    {
      number: "02",
      title: "Определяем уровень",
      text: "Понимаем, где есть пробелы и что уже получается хорошо.",
    },
    {
      number: "03",
      title: "Строим маршрут",
      text: "Подбираем формат и программу именно под этого ученика.",
    },
    {
      number: "04",
      title: "Начинаем заниматься",
      text: "После знакомства обсуждаем график, формат и стоимость занятий.",
    },
  ];

  return (
<AnimatedSection
  id="how"
  className="
    relative
    z-20
    -mt-[70px]

    flex
    min-h-[90svh]
    w-full
    items-center

    overflow-hidden
    rounded-b-[46px]
    bg-white

    px-5
    pb-24
    pt-[120px]

    md:-mt-[90px]
    md:rounded-b-[60px]
    md:px-10
    md:pt-[150px]

    lg:min-h-screen
    lg:px-16
  "
>
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="text-center">
          <span className="rounded-full bg-[#d91f25] px-5 py-2 text-sm uppercase text-white">
            Как всё начинается
          </span>

          <h2 className="mt-6 text-[28px] font-bold lg:text-[44px]">
            Сначала ученик — потом программа
          </h2>
        </div>

        <div
          className="
            mt-10
            grid
            gap-4

            sm:grid-cols-2

            lg:mt-14
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {steps.map((step) => (
            <article
              key={step.number}
              className="
                min-h-[210px]
                rounded-[30px]
                border
                border-[#ffc1ba]
                p-6
                shadow-[0_7px_18px_rgba(255,80,65,0.12)]

                lg:min-h-[300px]
                lg:p-8
              "
            >
              <div className="text-[28px] font-bold text-[#d91f25]">
                {step.number}
              </div>

              <h3 className="mt-5 text-[19px] font-bold lg:text-[23px]">
                {step.title}
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-[#555]">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}   