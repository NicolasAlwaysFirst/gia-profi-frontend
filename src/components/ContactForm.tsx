"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function ContactForm() {
  return (
<section
  id="contact"
  className="
    relative
    z-10

    -mt-[70px]
    md:-mt-[90px]

    -mb-[40px]
    md:-mb-[60px]

    flex
    min-h-[90svh]
    w-full
    items-center
    overflow-hidden
    rounded-b-[46px]

    bg-gradient-to-br
    from-[#ffbe6c]
    via-[#ff8d59]
    to-[#ff5942]

    px-5
    pb-[100px]
    pt-[120px]

    md:px-10
    md:pt-[150px]

    lg:min-h-screen
    lg:px-16
  "
>
<AnimatedSection
  id="contact"
  className="
    relative
    z-10
    -mt-[70px]
    flex
    min-h-[90svh]
    w-full
    items-center
    bg-gradient-to-br
    from-[#ffbe6c]
    via-[#ff8d59]
    to-[#ff5942]
    px-5
    pb-20
    pt-[120px]
    

    md:-mt-[90px]
    md:px-10
    md:pt-[150px]

    lg:min-h-screen
    lg:px-16
    lg:px-4
    lg:px-8
    lg:px(mw:5 - 16)
  "
>
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1100px]
          gap-10

          md:grid-cols-2
          md:items-center

          lg:gap-20
        "
      >
        <div>
          <span className="rounded-full border-2 border-white px-5 py-2 text-sm uppercase text-white">
            Знакомство
          </span>

          <h2
            className="
              mt-7
              text-[36px]
              font-bold
              leading-[1.05]
              text-white

              lg:text-[60px]
            "
          >
            Давайте сначала познакомимся
          </h2>

          <p className="mt-6 max-w-[500px] text-[15px] leading-relaxed text-white/90 lg:text-[18px]">
            Оставьте контакты и несколько слов об ученике. Преподаватель
            свяжется с вами, узнает ситуацию подробнее и предложит подходящий
            формат работы.
          </p>
        </div>

        <form
          className="
            rounded-[35px]
            bg-white
            p-6
            shadow-[0_15px_35px_rgba(140,40,20,0.18)]

            lg:p-9
          "
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Имя ученика"
              className="
                w-full
                rounded-2xl
                border
                border-[#ffd0ca]
                px-4
                py-3
                outline-none
                transition
                focus:border-[#d91f25]
              "
            />

            <input
              type="text"
              placeholder="Класс"
              className="
                w-full
                rounded-2xl
                border
                border-[#ffd0ca]
                px-4
                py-3
                outline-none
                focus:border-[#d91f25]
              "
            />

            <input
              type="text"
              placeholder="Имя родителя"
              className="
                w-full
                rounded-2xl
                border
                border-[#ffd0ca]
                px-4
                py-3
                outline-none
                focus:border-[#d91f25]
              "
            />

            <input
              type="tel"
              placeholder="Телефон"
              className="
                w-full
                rounded-2xl
                border
                border-[#ffd0ca]
                px-4
                py-3
                outline-none
                focus:border-[#d91f25]
              "
            />

            <textarea
              placeholder="Что хотелось бы улучшить?"
              className="
                min-h-[120px]
                w-full
                resize-none
                rounded-2xl
                border
                border-[#ffd0ca]
                px-4
                py-3
                outline-none
                focus:border-[#d91f25]
              "
            />

            <button
              type="submit"
              className="
                w-full
                rounded-full
                bg-[#d91f25]
                px-6
                py-4
                text-sm
                uppercase
                text-white
              "
            >
              Познакомиться
            </button>
          </div>
        </form>
      </div>
    </AnimatedSection>
    </section>
  );
}