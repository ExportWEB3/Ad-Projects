import { ReactNode } from "react";

export interface layoutAttributes {
  children: ReactNode;
}

export interface initialStateAttributes {
  user: userAttributes | null;
  isToastState: toastAttributes;
  cartCount: number;
  users: userAttributes[];
  products: productsAttrubutes[];
  cart: cartAttributes | null;
}

export interface cartAttributes {
  products: productsAttrubutes[];
  totalPrice: string;
  userId: number;
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
  firstName?: string;
  lastName?: string;
  password: string;
  email: string;
  id?: number;
  role?: userRolesAttributes;
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
  | {
      type: "ADD_CARTCOUNT";
    }
  | {
      type: "SUBTRACT_CARTCOUNT";
    }
  | {
      type: "SET_REGISTER_USER";
      payload: userAttributes;
    }
  | {
      type: "SET_CREATE_PRODUCT";
      payload: productsAttrubutes;
    }
  | {
      type: "DELETE_PRODUCT";
      payload: string | number;
    };

export interface toastAttributes {
  text?: string;
  state: boolean;
}

export interface globalUseContextStateAttributes {
  state: initialStateAttributes;
  dispatch: React.Dispatch<actionAttributes>;
}

export interface buttonAttributes {
  btnName: string;
  onClick?: Function;
}

export interface menuDataAttributes {
  menuName: menuDataNameAttributes;
  link: string;
}

export type menuDataNameAttributes =
  | "Login"
  | "Log out"
  | "Register"
  | "Home"
  | "Cart"
  | "Dashboard";

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

export type registeruserAttributes =
  | "First Name"
  | "Last Name"
  | "Password"
  | "Email";

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

export type createProductsAttributes =
  | "Product Name"
  | "Description"
  | "Price"
  | "Availability"
  | "Image"
  | "Quantity";

export interface iconAttributes {
  icon: string;
  className?: string;
}
