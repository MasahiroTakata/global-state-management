import { useContext } from "react";
// 作成したContextをimport
import { AdminFlagContext } from "./providers/AdminFlagProvider";
const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};
export const EditButton = () => {
  // useContextの引数に参照するContextを指定する
  // isAdminの中身は、AdminFlaProvider.jsxのAdminFlagContext.Providerオブジェクトのvalueが入る
  // useContextで、グローバルに使う変数を指定する（この場合は、AdminFlagContext）
  const { isAdmin } = useContext(AdminFlagContext);
  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};
