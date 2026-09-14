export default function FAQ() {
    const questions = [
        {
            q: "Сколько длится занятие?",
            a: "Обычно 60 минут.",
        },
        {
            q: "Где проходят занятия?",
            a: "Онлайн или очно — зависит от договорённости.",
        },
        {
            q: "Есть ли домашние задания?",
            a: "Да, при необходимости даю задания для закрепления материала.",
        },
    ];

    return (
        <section className="px-6 py-16">
            <h2 className="text-center text-3xl font-bold">
                Частые вопросы
            </h2>

            <div className="mx-auto mt-8 max-w-3xl space-y-4">
                {questions.map((item) => (
                    <div
                        key={item.q}
                        className="rounded-2xl border p-5"
                    >
                        <h3 className="font-bold">{item.q}</h3>
                        <p className="mt-2 text-gray-600">{item.a}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}