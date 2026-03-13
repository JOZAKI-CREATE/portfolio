import { useState, useEffect } from "react";

const CustomerApp = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [memo, setMemo] = useState("");
  const [search, setSearch] = useState("");
  const [customers, setCustomers] = useState(() => {
    const saved = localStorage.getItem("customers");
    return saved ? JSON.parse(saved) : [];
  });
  const [lastVisit, setLastVisit] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [visitDate, setVisitDate] = useState("");
  const [visitMenu, setVisitMenu] = useState("");
  const [visitInputs, setVisitInputs] = useState({});


  // 保存
  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  const addCustomer = () => {

    if (!name) return alert("名前を入力してください");

    if (editingId) {

      setCustomers(
        customers.map((c) =>
          c.id === editingId
            ? { ...c, name, phone, memo, lastVisit }
            : c
        )
      );

      setEditingId(null);

    } else {

      const newCustomer = {
        id: crypto.randomUUID(),
        name,
        phone,
        memo,
        lastVisit,
        visits: []
      };

      setCustomers([...customers, newCustomer]);

    }

    setName("");
    setPhone("");
    setMemo("");
    setLastVisit("");
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  const addVisit = (id) => {

    const visit = visitInputs[id];
    if (!visit?.date) return;

    setCustomers(
      customers.map((c) => {
        if (c.id === id) {

          const newVisit = {
            date: visit.date,
            menu: visit.menu
          };

          return {
            ...c,
            lastVisit: visitDate,
            visits: [...(c.visits || []), newVisit]
          };

        }
        return c;
      })
    );

    setVisitInputs({
      ...visitInputs,
      [id]: { date: "", menu: "" }
    });

    setVisitDate("");
    setVisitMenu("");
  };

  const startEdit = (customer) => {

    setName(customer.name);
    setPhone(customer.phone);
    setMemo(customer.memo);
    setLastVisit(customer.lastVisit || "");

    setEditingId(customer.id);

  };

  // 🔍検索フィルター
  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

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

        <input
          type="date"
          value={lastVisit}
          onChange={(e) => setLastVisit(e.target.value)}
          className="border rounded-lg p-2 w-full"
          placeholder="最終来店日"
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
          {editingId ? "更新" : "追加"}
        </button>

      </div>

      {/* 🔍検索 */}

      <input
        type="text"
        placeholder="顧客検索"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg p-2 w-full mb-6"
      />

      {/* 顧客一覧 */}

      <div className="space-y-2">

        {filteredCustomers.map((c) => (

          <div
            key={c.id}
            className="flex justify-between items-center bg-stone-50 p-3 rounded-lg"
          >

            <div className="text-sm">
              <div>{c.name}</div>
              <div className="text-stone-400">{c.phone}</div>
              <div className="text-stone-500">{c.memo}</div>
              <div className="text-xs text-stone-400">
                最終来店: {c.lastVisit || "未登録"}
              </div>
            </div>

            <div className="mt-3 space-y-2">

              <input
                type="date"
                value={visitInputs[c.id]?.date || ""}
                onChange={(e) =>
                  setVisitInputs({
                    ...visitInputs,
                    [c.id]: { ...visitInputs[c.id], date: e.target.value }
                  })
                }
              />

              <input
                type="text"
                placeholder="メニュー"
                value={visitInputs[c.id]?.menu || ""}
                onChange={(e) =>
                  setVisitInputs({
                    ...visitInputs,
                    [c.id]: { ...visitInputs[c.id], menu: e.target.value }
                  })
                }
              />

              <button
                onClick={() => addVisit(c.id)}
                className="text-xs text-stone-400 hover:text-stone-600"
              >
                履歴追加
              </button>

            </div>

            {c.visits && (
              <div className="text-xs text-stone-400 mt-2">

                {c.visits.map((v, i) => (
                  <div key={i}>
                    {v.date} {v.menu}
                  </div>
                ))}

              </div>
            )}

            <div className="flex gap-3">

              <button
                onClick={() => startEdit(c)}
                className="text-stone-400 hover:text-stone-600 text-sm"
              >
                編集
              </button>

              <button
                onClick={() => deleteCustomer(c.id)}
                className="text-stone-400 text-sm hover:text-stone-600"
              >
                削除
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default CustomerApp;