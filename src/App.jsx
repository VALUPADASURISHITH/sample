import React, { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [val, setVal] = useState("");
  const [edit, setEdit] = useState(null);

  const save = () => {
    if (!val.trim()) return;
    const updated = edit !== null ? list.map((v, i) => (i === edit ? val : v)) : [...list, val];
    setList(updated);
    setVal("");
    setEdit(null);
  };

  return (
    <div>
      <h3>Student CRUD</h3>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={save}>{edit !== null ? "Update" : "Add"}</button>
      {list.map((v, i) => (
        <div key={i}>
          {v}{" "}
          <button onClick={() => { setVal(v); setEdit(i); }}>Edit</button>
          <button onClick={() => setList(list.filter((_, j) => j !== i))}>Del</button>
        </div>
      ))}
    </div>
  );
}
