import "./App.css";
import Alert from "./components/alert/Alert";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
    </div>
  );
}

export default App;
