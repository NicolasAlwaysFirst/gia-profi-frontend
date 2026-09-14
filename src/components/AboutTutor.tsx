import Image from "next/image";

export default function AboutTutor() {
    return (
        <section
            id="about"
            className="relative overflow-hidden rounded-b-[38px] bg-gradient-to-br from-[#ffd36f] via-[#ff9a63] to-[#ff5b3f] px-5 py-6"
        >
            <div className="mb-3 flex justify-end">
                <span className="rounded-full border-2 border-white px-5 py-1 text-sm uppercase text-white">
                    Про меня
                </span>
            </div>

            <div className="grid grid-cols-[140px_1fr] items-center gap-5">
                <div className="rounded-[28px] border-2 border-white p-2">
                    <Image
                        src="/images/tutor/tutor.png"
                        alt="Репетитор"
                        width={130}
                        height={160}
                        className="w-full object-contain"
                    />
                </div>

                <div className="text-[14px] uppercase leading-[1.25]">
                    <p>
                        Я «Имя Фамилия»
                    </p>
                    <p>Преподаватель</p>
                    <p>Окончила:</p>
                    <p>Стаж:</p>
                    <p>История:</p>
                </div>
            </div>

            <div className="absolute left-4 top-4 text-3xl text-red-400">＋</div>
            <div className="absolute right-3 bottom-12 text-3xl text-red-400">[</div>
        </section>
    );
}