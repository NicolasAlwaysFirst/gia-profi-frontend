export default function Tariffs() {
    const tariffs = [
        {
            title: "Разовое занятие",
            price: "1200 ₽",
        },
        {
            title: "4 занятия",
            price: "4400 ₽",
        },
        {
            title: "8 занятий",
            price: "8000 ₽",
        },
    ];

    return (
        <section id="tariffs" className="px-6 py-16">
            <h2 className="text-center text-3xl font-bold">
                Тарифы
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {tariffs.map((tariff) => (
                    <div
                        key={tariff.title}
                        className="rounded-3xl border p-6 text-center"
                    >
                        <h3 className="text-xl font-bold">{tariff.title}</h3>
                        <p className="mt-4 text-2xl text-red-500">
                            {tariff.price}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}