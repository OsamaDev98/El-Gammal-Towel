import { useState, useEffect } from "react";
import axios from "axios";
import img from "./assets/img.jpg";
import "./App.css";

function App() {
  const [pop, setPop] = useState(false);
  const [name, setName] = useState("");
  const [choose, setChoose] = useState("");
  useEffect(() => {
    const items = document.querySelectorAll("form ul li");
    const submitBtn = document.querySelector("form .submit-btn");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        items.forEach((item) => {
          item.classList.remove("active");
        });
        item.classList.add("active");
      });
    });
    submitBtn.addEventListener("click", () => {
      items.forEach((item) => {
        item.classList.remove("active");
      });
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Choose: choose,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/3f8391cd-6d17-4e53-9c34-4b83e28a2f72",
        data
      )
      .then((response) => {
        setName("");
        setChoose("");
      });
  };

  const handlePop = () => {
    if (name != "" && choose != "") {
      setPop(!pop);
    }
  };

  return (
    <>
      <div>
        <img src={img} className="logo react" alt="React logo" />
      </div>
      <h1 dir="rtl" className="head-h1">
        اختر من سرق فوطة الجمل
      </h1>
      <form dir="rtl" autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-name">
          <label>اسمك لو سمحت:</label>
          <input
            type="text"
            required
            placeholder="اسمك"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <ul>
          <li onClick={() => setChoose("عوني")}>احمد عوني</li>
          <li onClick={() => setChoose("حمادة")}>حمادة</li>
          <li onClick={() => setChoose("اسماعيل")}>اسماعيل</li>
          <li onClick={() => setChoose("علي")}>
            علي ابن اخت عبده(ممكن ليه لا)
          </li>
        </ul>
        <button className="submit-btn" type="submit" onClick={handlePop}>
          أرسال
        </button>
      </form>
      <div
        className="pop-container"
        style={pop ? { display: "flex" } : { display: "none" }}
      >
        <div className="pop">
          <p>سلملي علي السيد يا عبده</p>
          <button onClick={() => setPop(!pop)}>وصل يباشا</button>
        </div>
      </div>
      <p className="copyright">&copy; 2023 created by prof: Osama Gad.</p>
    </>
  );
}

export default App;
