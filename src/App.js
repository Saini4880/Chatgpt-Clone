import "./App.css";
import plus from "./img/plus.png";
import del from "./img/delete.png";
import exi from "./img/exit.png";
import snd from "./img/send.jpg";
import txtt from "./img/txt.webp";
import stp from "./img/stop.webp";
import vct from "./img/vc.webp";
import mi from "./img/micon.png";

function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("active");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropt")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("active")) {
        openDropdown.classList.remove("active");
      }
    }
  }
};

function App() {
  return (
    <>
      <div className="topdiv" style={{ marginLeft: "20px" }}>
        <img
          src={vct}
          alt="Man Icon"
          className="vct"
          style={{ width: "50px", height: "50px" }}
        />
        <span>OS</span>
        <img
          src={mi}
          alt="Man Icon"
          className="vt"
          style={{ width: "40px", height: "40px", marginLeft: "1200px" }}
        />
        <span>Ritik Saini</span>
      </div>
      <div className="App">
        <div
          className="sidebar"
          style={{
            width: "20%",
            height: "10%",
            position: "relative",
            background:
              "linear-gradient(169deg, #F4E7FE 0%, rgba(173, 255, 214, 0.51) 100%)",
            borderRadius: "10px",
            margin: "20px 20px 20px 20px",
          }}
        >
          <div className="upperside">
            <div className="uppersidetop">
              <button
                className="midbtn"
                style={{ width: "100%", height: "100%" }}
              >
                <img
                  src={plus}
                  alt="logo"
                  className="logo"
                  style={{ width: "20px", height: "20px", marginRight: "15px" }}
                />
                <span>Create New Chat</span>
              </button>
            </div>
            <div className="uppersidebottom">
              <button
                className="query"
                style={{ width: "100%", height: "100%", textAlign: "left" }}
              >
                Trending StartUps
              </button>
              <button
                className="query"
                style={{ width: "100%", height: "100%", textAlign: "left" }}
              >
                LLM and VCs
              </button>
              <button
                className="query"
                style={{ width: "100%", height: "100%", textAlign: "left" }}
              >
                Ai Grant Benefits
              </button>
              <button
                className="query"
                style={{ width: "100%", height: "100%", textAlign: "left" }}
              >
                Trending StartUps
              </button>
              <button
                className="query"
                style={{ width: "100%", height: "100%", textAlign: "left" }}
              >
                LLM and VCs
              </button>
              <button
                className="query"
                style={{ width: "100%", height: "100%", textAlign: "left" }}
              >
                Ai Grant Benefits
              </button>
            </div>
            <div className="lowerside">
              <button
                className="listitems"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src={del}
                  alt="del"
                  className="del"
                  style={{ width: "20px", height: "20px", marginRight: "15px" }}
                />
                <span>Clear History</span>
              </button>
              <button
                className="listitems"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src={exi}
                  alt="exi"
                  className="exi"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "15px",
                    background:
                      "linear-gradient(319deg, #A1FFD9 0%, #D39FFF 100%)",
                  }}
                />
                <span>Exit</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="mainbar"
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            background:
              "linear-gradient(114deg, #F4E7FE 0%, rgba(173.19, 255, 214.09, 0.51) 100%)",
            borderRadius: "10px",
            margin: "20px 20px 20px 20px",
          }}
        >
          <div className="dropdown" id="myDropdown">
            <button className="dropt" onClick={toggleDropdown}>
              B2B SaaS
            </button>
            <ul className="dropdown-content">
              <li>
                <a className="dropdown-item" href="#">
                  GenerativeAI
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  ClimateTech
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  BioTech
                </a>
              </li>
            </ul>
            <button className="clrchat" style={{ marginLeft: "700px" }}>
              <img
                src={del}
                style={{ width: "20px", height: "20px", marginRight: "15px" }}
              />
              Clear Chat
            </button>
          </div>



          {/* Comment In this code below for the new screen where a new chat is started */}
          {/* <div className="chatbox">
          <div className="chats1">
            <img className="txtImg" src={txtt} alt="text" />
            <p className="ques">
              How to connect longchain to search engines with serapi
            </p>
          </div>
          <div className="chats2">
            <img className="txtImg" src={txtt} alt="text" />
            <p className="ans">Answer to your question Answer question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question  Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question Answer to your question </p>
          </div>
        </div>

        <div className="stopgenerating">
          <button className="stpbtn">
            <img
              src={stp}
              style={{ width: "20px", height: "20px", marginRight: "15px" }}
            />
            <span>Stop Generating</span>
          </button>
        </div> */}
        {/* till here */}



         {/* When you comment in the above code do not forget to comment out the below code */}
          <div className="textt">
            <p>Let's Make It Possible!</p>
          </div>

          <div className="tb-container">
            <div className="tb1">
              <p>How to connect longchain to search engines with serpapjnjni</p>
            </div>
            <div className="tb2">
              <p>How to connect longchain to search engines with serpapi</p>
            </div>
            <div className="tb3">
              <p>How to connect longchain to search engines with serpapi</p>
            </div>
            <div className="tb4">
              <p>How to connect longchain to search engines with serpapi</p>
            </div>
          </div>
            {/* till here */}



          <div className="chatFooter">
            <div className="inp">
              <input type="text" name="" id="" />
              <button
                className="send"
                style={{ width: "220px", height: "220px" }}
              >
                <img
                  className="inpImg"
                  src={snd}
                  alt="send"
                  style={{ width: "22px", height: "22px" }}
                />
              </button>
            </div>
          </div>
          <p className="imp">
            VcOS can make mistakes. Consider Checking Important Information
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
