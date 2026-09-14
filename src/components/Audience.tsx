export default function Audience() {
    return (
        <section className="px-5 py-5">
            <div className="text-center">
                <span className="inline-block rounded-full bg-[#d91f25] px-4 py-1 text-sm uppercase text-white">
                    Кому подходят
                </span>

                <div className="mt-1 text-sm uppercase tracking-wide">
                    занятия
                </div>
            </div>

            <div className="mt-5 rounded-[28px] border border-red-200 bg-white p-5 shadow-[0_6px_12px_rgba(255,70,60,0.2)]">
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold">Подтянуть оценки</h3>
                        <p className="text-sm text-gray-600">
                            Разберём пробелы и закрепим школьную программу.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Подготовиться к экзамену</h3>
                        <p className="text-sm text-gray-600">
                            Работаем по плану и отрабатываем типовые задания.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Понять математику</h3>
                        <p className="text-sm text-gray-600">
                            Учимся понимать ход решения, а не запоминать ответы.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}