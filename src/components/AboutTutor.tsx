import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutTutor() {
  return (
<AnimatedSection
  id="about"
  className="
    relative
    z-30
    -mt-[70px]

    flex
    min-h-[90svh]
    w-full
    items-center

    overflow-hidden
    rounded-b-[46px]

    bg-gradient-to-br
    from-[#ffd36f]
    via-[#ff9962]
    to-[#ff5d42]

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
>s
      <span className="absolute left-[5%] top-[12%] rotate-12 text-4xl text-[#ef4d42]">
        ＋
      </span>

      <span className="absolute bottom-[14%] right-[4%] text-4xl text-[#ef4d42]">
        [
      </span>

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1200px]
          gap-10

          md:grid-cols-[320px_1fr]
          md:items-center

          lg:grid-cols-[430px_1fr]
          lg:gap-20
        "
      >
        <div>
          <div
            className="
              mx-auto
              max-w-[280px]
              rounded-[40px]
              border-[3px]
              border-white
              p-3

              md:max-w-none
            "
          >
            <Image
              src="/images/tutor/tutor.png"
              alt="Репетитор"
              width={500}
              height={600}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-start md:justify-end">
            <span
              className="
                rounded-full
                border-2
                border-white
                px-6
                py-2
                text-[14px]
                uppercase
                text-white

                lg:text-[17px]
              "
            >
              Про меня
            </span>
          </div>

          <h2
            className="
              mt-7
              text-[30px]
              font-bold
              uppercase
              leading-tight

              lg:text-[48px]
            "
          >
            Имя Фамилия
          </h2>

          <p className="mt-3 text-[16px] font-medium lg:text-[20px]">
            Репетитор по математике
          </p>

          <div
            className="
              mt-7
              space-y-4
              text-[14px]
              leading-relaxed

              lg:text-[17px]
            "
          >
            <p>
              <strong>Образование:</strong> указать образование преподавателя.
            </p>

            <p>
              <strong>Опыт:</strong> указать реальный преподавательский стаж.
            </p>

            <p>
              <strong>Подход:</strong> сначала познакомиться с учеником,
              понять его уровень, цели и сложности — и только после этого
              составлять программу занятий.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}