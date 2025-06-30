import { useContext, useEffect, useState } from "react";
import { ToastComponent } from "./Toast/toast";
import { GlobalUseContext } from "../Context/context"; 
import { LoginComponent } from "./Login/login";
import { layoutAttributes } from "../utilities/typedec";


export function LayoutComponent({ children }: layoutAttributes) {
  const { state, dispatch } = useContext(GlobalUseContext);
  const [isOnline, setIsOnline] = useState<boolean>(false);

  useEffect(() => {
    const findUser = localStorage.getItem("onlineId");
    if (findUser) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  }, [state?.user?.email]);

  return (
    <div className="width100 height100 flex flex-column">
      {state?.isToastState?.notificationText && <ToastComponent />}
      {isOnline ? children : <LoginComponent />}
      {/*children */}
    </div>
  );
}
