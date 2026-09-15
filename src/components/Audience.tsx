import AnimatedSection from "@/components/AnimatedSection";

export default function Audience() {
  const items = [
    {
      title: "Подтянуть оценки",
      text: "Найти пробелы и спокойно восстановить школьную базу.",
    },
    {
      title: "Разобраться в сложных темах",
      text: "Объяснить непонятное нормальным человеческим языком.",
    },
    {
      title: "Подготовиться к экзаменам",
      text: "Выстроить индивидуальный маршрут и двигаться по нему.",
    },
  ];

  return (
<AnimatedSection
  className="
    relative
    z-40
    -mt-[70px]

    flex
    min-h-[90svh]
    w-full
    flex-col

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
          <span
            className="
              inline-flex
              rounded-full
              bg-[#d91f25]
              px-5
              py-2
              text-[13px]
              uppercase
              text-white

              lg:text-[16px]
            "
          >
            Кому подходят
          </span>

          <p className="mt-2 text-[14px] uppercase tracking-[0.08em]">
            занятия
          </p>
        </div>

        <div
          className="
            mt-8
            grid
            gap-5

            md:mt-14
            md:grid-cols-3
            md:gap-6
          "
        >
          {items.map((item, index) => (
            <article
              key={item.title}
              className="
                flex
                min-h-[170px]
                flex-col
                justify-center
                rounded-[30px]
                border
                border-[#ffc1ba]
                bg-white
                p-6
                shadow-[0_7px_18px_rgba(255,80,65,0.18)]

                md:min-h-[240px]

                lg:min-h-[300px]
                lg:p-8
              "
            >
              <span className="text-[12px] font-bold text-[#d91f25]">
                0{index + 1}
              </span>

              <h3
                className="
                  mt-2
                  text-[18px]
                  font-bold

                  lg:text-[24px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  text-[14px]
                  leading-relaxed
                  text-[#555]

                  lg:text-[16px]
                "
              >
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}