export default function Header() {
    return (
        <header className="sticky top-0 z-50 px-3 pt-2">
            <div className="flex items-center justify-center gap-4 rounded-b-[18px] bg-white px-3 py-2 text-[9px] uppercase shadow-md">
                <a href="#about">Про меня</a>
                <a href="#notes">Конспекты</a>
                <a href="#tariffs">Тарифы</a>
                <a href="#reviews">Отзывы</a>

                <a
                    href="#contact"
                    className="rounded-full bg-[#d91f25] px-3 py-1 text-white"
                >
                    Записаться
                </a>
            </div>
        </header>
    );
}