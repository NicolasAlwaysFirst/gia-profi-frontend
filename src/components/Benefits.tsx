export default function Benefits() {
    const benefits = [
        "Индивидуальный план",
        "Материалы после занятия",
        "Домашние задания",
        "Обратная связь",
        "Контроль прогресса",
    ];

    return (
        <section className="px-6 py-16">
            <h2 className="text-center text-3xl font-bold">
                Что получает ученик
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                {benefits.map((item) => (
                    <div
                        key={item}
                        className="rounded-full bg-orange-100 px-6 py-3"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
}