export default function LessonSteps() {
    const steps = [
        "Определяем уровень",
        "Ставим цель",
        "Составляем план",
        "Отслеживаем результат",
    ];

    return (
        <section id="lessons" className="px-6 py-16">
            <h2 className="text-center text-3xl font-bold">
                Как проходят занятия
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-4">
                {steps.map((step, index) => (
                    <div
                        key={step}
                        className="rounded-3xl border p-6 text-center"
                    >
                        <div className="text-3xl font-bold text-red-500">
                            0{index + 1}
                        </div>

                        <p className="mt-3">{step}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}