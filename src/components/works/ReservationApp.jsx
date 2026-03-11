import { useState, useEffect } from "react";

const times = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

const ReservationApp = () => {

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [menu, setMenu] = useState("ジェルネイル");
  const [reservations, setReservations] = useState([]);

  // LocalStorage読み込み
  useEffect(() => {
    const saved = localStorage.getItem("reservations");
    if (saved) setReservations(JSON.parse(saved));
  }, []);

  // LocalStorage保存
  useEffect(() => {
    localStorage.setItem(
      "reservations",
      JSON.stringify(reservations)
    );
  }, [reservations]);

  const addReservation = (time) => {
    if (!date || !name) return alert("日付と名前を入力してください");

    const newReservation = {
      id: crypto.randomUUID(),
      date,
      time,
      name,
      menu,
    };

    setReservations([...reservations, newReservation]);
  };

  const deleteReservation = (id) => {
    setReservations(reservations.filter((r) => r.id !== id));
  };

  const todayReservations = reservations.filter(
    (r) => r.date === date
  );

  const isReserved = (time) => {
    return todayReservations.some((r) => r.time === time);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-2xl font-bold mb-6 text-[#6b5e4f]">
        Reservation
      </h2>

      {/* 日付選択 */}
      <div className="mb-4">
        <label className="text-sm text-stone-600">
          日付
        </label>

        <input
          type="date"
          className="border rounded-lg p-2 w-full"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* 名前 */}
      <div className="mb-4">
        <label className="text-sm text-stone-600">
          名前
        </label>

        <input
          type="text"
          placeholder="お名前"
          className="border rounded-lg p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* メニュー */}
      <div className="mb-6">
        <label className="text-sm text-stone-600">
          メニュー
        </label>

        <select
          className="border rounded-lg p-2 w-full"
          value={menu}
          onChange={(e) => setMenu(e.target.value)}
        >
          <option>ジェルネイル</option>
          <option>ワンカラー</option>
          <option>フレンチ</option>
        </select>
      </div>

      {/* 時間 */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => addReservation(time)}
            disabled={isReserved(time)}
            className={`p-2 rounded-lg text-sm
              ${
                isReserved(time)
                  ? "bg-stone-200 text-stone-400"
                  : "bg-[#a67c52] text-white hover:opacity-90"
              }
            `}
          >
            {time}
          </button>
        ))}
      </div>

      {/* 予約一覧 */}
      {date && (
        <div>
          <h3 className="font-semibold mb-3 text-[#6b5e4f]">
            {date} の予約
          </h3>

          {todayReservations.length === 0 && (
            <p className="text-stone-400 text-sm">
              まだ予約がありません
            </p>
          )}

          <div className="space-y-2">
            {todayReservations.map((r) => (
              <div
                key={r.id}
                className="flex justify-between items-center bg-stone-50 p-3 rounded-lg"
              >
                <div className="text-sm">
                  {r.time} / {r.name} / {r.menu}
                </div>

                <button
                  onClick={() => deleteReservation(r.id)}
                  className="text-red-400 text-sm"
                >
                  削除
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default ReservationApp;