import Image from "next/image";

export default function Hero() {
    return (
        <section className="px-4 pt-2">
            <div className="relative overflow-hidden rounded-b-[38px] bg-gradient-to-br from-[#ff4f3d] via-[#ff7650] to-[#ffb36b] px-5 pb-5 pt-6">
                <div className="relative z-10">
                    <h1 className="max-w-[210px] text-[26px] font-semibold uppercase leading-[1.05] tracking-[0.08em] text-white">
                        На 100 баллов готов
                    </h1>

                    <div className="mt-14 flex gap-3">
                        <a
                            href="#contact"
                            className="h-7 w-24 rounded-full bg-[#d91f25]"
                        />

                        <a
                            href="#about"
                            className="h-7 w-24 rounded-full border-[3px] border-white"
                        />
                    </div>
                </div>

                <Image
                    src="/images/hero/student.png"
                    alt="Ученик"
                    width={150}
                    height={150}
                    className="absolute bottom-2 right-5 object-contain"
                />

                <div className="absolute left-4 top-10 text-3xl text-red-400">＋</div>
                <div className="absolute right-3 top-10 text-2xl text-red-400">−</div>
                <div className="absolute right-3 bottom-7 text-3xl text-red-400">[</div>
            </div>
        </section>
    );
}