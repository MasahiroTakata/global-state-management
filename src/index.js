import ReactDOM from "react-dom"; // react標準で用意しているモジュールは{}は不要
import { App } from "./App"; // 独自で作成したコンポーネントは{}が必要
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

// 参照したいコンポーネントを囲む
ReactDOM.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById("root")
);
