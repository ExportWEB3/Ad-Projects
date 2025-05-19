import { iconAttributes } from "../../utilities/typedec";

export function Icon (props: iconAttributes) {
  const { icon, className } = props;
  return <i className={`${icon} ${className}`}></i>;
}
