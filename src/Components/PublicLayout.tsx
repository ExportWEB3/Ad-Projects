import { useContext } from "react";
import { layoutAttributes } from "../utilities/typedec";
import { GlobalUseContext } from "../Context/context";
import { ToastComponent } from "./Toast/toast";
import { HeaderComponent } from "./Header/header";
import { SpinnerComponent } from "../utilities/UI/spinner.ui";


export function PublicLayout({ children }: layoutAttributes) {
  const { state, dispatch } = useContext(GlobalUseContext);

  return (
    <div className="width100 height100 flex flex-column">
      {state?.isLoading && <SpinnerComponent/>}
      {state?.isToastState?.notificationText && <ToastComponent />}
      {children}
    </div>
  );
}
