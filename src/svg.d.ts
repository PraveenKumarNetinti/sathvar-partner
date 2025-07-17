declare module "*.svg" {
  import { HTMLAttributes } from "react";

  export default React.Component<HTMLAttributes<HTMLDivElement>>;
}
