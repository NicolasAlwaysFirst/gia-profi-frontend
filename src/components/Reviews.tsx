export default function Reviews() {
    const reviews = [
        "Стало намного легче понимать математику.",
        "Подтянули оценки за четверть.",
        "Ребёнок перестал бояться контрольных.",
    ];

    return (
        <section id="reviews" className="px-6 py-16">
            <h2 className="text-center text-3xl font-bold">
                Отзывы
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="rounded-3xl bg-orange-50 p-6"
                    >
                        <p>{review}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}