import { useState } from "react";
import "./App.css";
import Accordian from "./Component/Accordian";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [colors, setcolor] = useState({
    color: "#212529",
    backgroundColor: "#fff",
  });

  let changecolor = () => {
    changecolorTextbox();
    if (colors.backgroundColor === "#fff") {
      setcolor({
        color: "#fff",
        backgroundColor: "#042743",
      });
      document.body.style.backgroundColor = "#042743";
      alertmsg("dark mode enabled", "success");
      document.title = "Dark mode page";
    } else {
      setcolor({
        color: "#212529",
        backgroundColor: "#fff",
      });
      document.body.style.backgroundColor = "#fff";
      alertmsg("light mode enabled", "success");
      document.title = "Light mode page";
    }
  };

  const [boxcolors, setboxcolor] = useState({
    color: "rgb(33, 37, 41)",
    backgroundColor: "rgb(255, 255, 255)",
  });

  let changecolorTextbox = () => {
    if (boxcolors.backgroundColor === "rgb(255, 255, 255)") {
      setboxcolor({
        color: "rgb(255, 255, 255)",
        backgroundColor: "rgb(104 108 112)",
      });
    } else {
      setboxcolor({
        color: "rgb(33, 37, 41)",
        backgroundColor: "rgb(255, 255, 255)",
      });
    }
  };

  const [alerttext, setalert] = useState({
    msg: "",
    type: "",
  });

  let alertmsg = (msg, type) => {
    setalert({ msg, type });

    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  return (
    <>
      <Navbar
        home="Home Page"
        menu="Actions"
        colorchange={changecolor}
        alert={alerttext}
        alertmsg={alertmsg}
      />
      <Alert alert={alerttext} />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                style={colors}
                boxstyle={boxcolors}
                alertmsg={alertmsg}
              />
            }
          />
          <Route path="/home" element={<Accordian />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
