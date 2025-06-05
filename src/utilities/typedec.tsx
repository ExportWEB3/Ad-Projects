import { ReactNode } from "react";

export interface layoutAttributes {
  children: ReactNode;
}

export interface initialStateAttributes {
  user: userAttributes | null;
  isToastState: toastAttributes;
  users: userAttributes[];
}


export interface productsAttrubutes {
  productName: string;
  description: string;
  price: string;
  availability: string;
  img: string;
  quantity: string;
  id: number;
}

export interface userAttributes {
  password: string;
  email: string;
  confirmPassword?: string;
}

export type userRolesAttributes = "admin_user" | "customer_user";

export type actionAttributes =
  | {
      type: "STORE_USER";
      payload: userAttributes;
    }
  | {
      type: "SET_TOAST";
      payload?: toastAttributes;
    }
  | {
      type: "CLEAR_TOAST";
      payload: toastAttributes;
    }
  | {
      type: "CLEAR_USER";
    }

export interface toastAttributes {
  text?: string;
  state: boolean;
  icon?: string;
  iconClassName?: string; 
  backgroundColor?: string; // Added optional backgroundColor property
}

export interface globalUseContextStateAttributes {
  state: initialStateAttributes;
  dispatch: React.Dispatch<actionAttributes>;
}

export interface buttonAttributes {
  btnName: string;
  onClick?: Function;
}



export interface inputAttributes {
  placeHolder?: string;
  type: "text" | "password" | "radio";
  displayText?: string;
  className?: string;
  displayType?: "flex-row" | "flex-col";
  onChange?: Function;
  payload?: unknown;
  divClassName?: string;
  value?: unknown;
  displayTextClassName?: string; // NEW: allow custom class for display text
}

export type registerationDataAttributes = {
  field: registeruserAttributes
  name: registerationNameAttributes
}

export type registerationNameAttributes =  "email" | "password" | "confirmPassword";


export type registeruserAttributes =
  | "Password"
  | "Email"
  | "Confirm Password";

export interface CustomButtonAttributes {
  btnText: string;
  onClick?: Function;
  className?: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  link?: string;
  children: React.ReactNode;
}

export interface loginAttributes {
  email: string;
  password: string;
}


export interface iconAttributes {
  icon: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>; // Updated onClick type for compatibility
}
