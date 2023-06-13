// ステップ１のContextの器を作成する
import { createContext, useState } from "react";
// デフォルト値の設定が可能(今回は空のオブジェクト)
export const AdminFlagContext = createContext({});
export const AdminFlagProvider = (props) => {
  const { children } = props;
  // 管理者フラグ
  const [isAdmin, setIsAdmin] = useState(false);
  // AdminFlagContextの中にProviderがあるのでそれでchildrenを囲む
  // valueの中にグローバルに扱う実際の値を設定
  // ContextオブジェクトとしてisAdminとsetIsAdminを設定
  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  );
};
