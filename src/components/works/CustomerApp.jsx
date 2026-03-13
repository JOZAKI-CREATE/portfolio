import { useState, useEffect } from "react";

const CustomerApp = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [memo, setMemo] = useState("");
  const [customers, setCustomers] = useState([]);

  // LocalStorage読み込み
  useEffect(() => {
    const saved = localStorage.getItem("customers");
    if (saved) setCustomers(JSON.parse(saved));
  }, []);

  // 保存
  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  const addCustomer = () => {

    if (!name) return alert("名前を入力してください");

    const newCustomer = {
      id: crypto.randomUUID(),
      name,
      phone,
      memo
    };

    setCustomers([...customers, newCustomer]);

    setName("");
    setPhone("");
    setMemo("");
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-2xl font-bold mb-6 text-[#6b5e4f]">
        Customer Manager
      </h2>

      {/* 入力 */}

      <div className="space-y-4 mb-6">

        <input
          type="text"
          placeholder="名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg p-2 w-full"
        />

        <input
          type="text"
          placeholder="電話番号"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border rounded-lg p-2 w-full"
        />

        <textarea
          placeholder="メモ"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          className="border rounded-lg p-2 w-full"
        />

        <button
          onClick={addCustomer}
          className="bg-[#a67c52] text-white px-4 py-2 rounded-lg"
        >
          追加
        </button>

      </div>

      {/* 顧客一覧 */}

      <div className="space-y-2">

        {customers.map((c) => (

          <div
            key={c.id}
            className="flex justify-between items-center bg-stone-50 p-3 rounded-lg"
          >

            <div className="text-sm">
              <div>{c.name}</div>
              <div className="text-stone-400">{c.phone}</div>
              <div className="text-stone-500">{c.memo}</div>
            </div>

            <button
              onClick={() => deleteCustomer(c.id)}
              className="text-red-400 text-sm"
            >
              削除
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default CustomerApp;