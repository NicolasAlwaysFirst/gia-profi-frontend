import Image from "next/image";

export default function Hero() {
  return (
<section
  className="
    relative
    z-50
    flex
    min-h-[92svh]
    w-full
    items-center
    overflow-hidden
    rounded-b-[46px]
    bg-gradient-to-br
    from-[#ff4d3f]
    via-[#ff7652]
    to-[#ffc36d]
    px-5
    pt-[80px]

    lg:min-h-screen
    lg:px-16
    lg:pt-[100px]
    lg:pb-[50px]
  "
>
      <div
        className="
          relative
          mx-auto
          flex
          h-full
          w-full
          max-w-[1280px]
          items-center
        "
      >
        {/* Декор */}
        <span className="absolute left-0 top-[18%] rotate-12 text-4xl text-[#ef4d42]/70">
          ＋
        </span>

        <span className="absolute right-[4%] top-[20%] text-4xl text-[#ef4d42]/70">
          −
        </span>

        <span className="absolute bottom-[15%] right-[3%] text-4xl text-[#ef4d42]/70">
          [
        </span>

        {/* Текст */}
        <div
          className="
            relative
            z-20
            w-[55%]
            max-w-[520px]
          "
        >
          <h1
            className="
              text-[34px]
              font-semibold
              uppercase
              leading-[1.05]
              tracking-[0.07em]
              text-white

              sm:text-[46px]

              md:text-[58px]

              lg:text-[74px]

              xl:text-[86px]
            "
          >
            На 100
            <br />
            баллов
            <br />
            готов
          </h1>

          <p
            className="
              mt-5
              max-w-[420px]
              text-[13px]
              leading-relaxed
              text-white/90

              sm:text-[15px]

              lg:mt-7
              lg:text-[18px]
            "
          >
            Индивидуальные занятия, где сначала разбираемся в ученике,
            а уже потом строим программу обучения.
          </p>

<div
  className="
    relative
    z-30
    mt-6
    flex
    flex-col
    gap-3

    sm:flex-row

    md:bottom-8
    md:left-8
    md:mt-11
  "
>
<a
  href="#contact"
  className="
    flex
    h-[48px]
    items-center
    justify-center
    rounded-full
    bg-[#d91f25]
    px-6
    text-[12px]
    uppercase
    text-white

    sm:min-w-[180px]

    md:min-w-0
  "
>
  Познакомиться
</a>

<a
  href="#about"
  className="
    flex
    h-[48px]
    items-center
    justify-center
    rounded-full
    border-2
    border-white
    px-6
    text-[12px]
    uppercase
    text-white

    sm:min-w-[150px]

    md:min-w-0
  "
>
  Про меня
</a>
          </div>
        </div>

        {/* Персонаж */}
        <Image
          src="/images/hero/student.png"
          alt="Ученик"
          width={650}
          height={650}
          priority
          className="
            absolute
            bottom-0
            right-[-55px]
            h-auto
            w-[230px]
            object-contain

            sm:right-[-20px]
            sm:w-[310px]

            md:right-[0]
            md:w-[190px]

            lg:right-[2%]
            lg:w-[300px]

            xl:w-[300px]
          "
        />
      </div>
    </section>
  );
}