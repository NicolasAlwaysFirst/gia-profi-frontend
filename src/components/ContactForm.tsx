export default function ContactForm() {
    return (
        <section id="contact" className="px-6 py-16">
            <div className="mx-auto max-w-xl rounded-[40px] bg-orange-100 p-8">
                <h2 className="text-center text-3xl font-bold">
                    Записаться на занятие
                </h2>

                <form className="mt-8 flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Имя"
                        className="rounded-xl border p-3"
                    />

                    <input
                        type="tel"
                        placeholder="Телефон"
                        className="rounded-xl border p-3"
                    />

                    <input
                        type="text"
                        placeholder="Класс"
                        className="rounded-xl border p-3"
                    />

                    <textarea
                        placeholder="Цель занятий"
                        className="min-h-28 rounded-xl border p-3"
                    />

                    <button
                        type="submit"
                        className="rounded-full bg-red-500 px-6 py-3 text-white"
                    >
                        Оставить заявку
                    </button>
                </form>
            </div>
        </section>
    );
}