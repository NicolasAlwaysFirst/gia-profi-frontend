export default function Formats() {
    return (
        <section className="px-6 py-16">
            <h2 className="text-center text-3xl font-bold">
                Формат занятий
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border p-6">
                    <h3 className="text-xl font-bold">Онлайн</h3>
                    <p className="mt-2">
                        Занятия проходят по видеосвязи с интерактивной доской.
                    </p>
                </div>

                <div className="rounded-3xl border p-6">
                    <h3 className="text-xl font-bold">Индивидуально</h3>
                    <p className="mt-2">
                        Всё внимание преподавателя сосредоточено на одном ученике.
                    </p>
                </div>
            </div>
        </section>
    );
}