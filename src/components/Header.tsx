export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-[100] w-full">
      <div
        className="
          mx-auto
          flex
          h-[52px]
          w-[94%]
          max-w-[1100px]
          items-center
          justify-center
          gap-3
          rounded-b-[22px]
          bg-white
          px-3
          text-[9px]
          uppercase
          shadow-[0_5px_15px_rgba(0,0,0,0.14)]

          sm:gap-5
          sm:text-[11px]

          lg:h-[62px]
          lg:gap-8
          lg:text-[13px]
        "
      >
        <a href="#about">Про меня</a>

        <a href="#how">Занятия</a>

        <a href="#contact">Знакомство</a>

        <a
          href="#contact"
          className="
            rounded-full
            bg-[#d91f25]
            px-3
            py-1.5
            text-white

            lg:px-5
            lg:py-2
          "
        >
          Записаться
        </a>
      </div>
    </header>
  );
}