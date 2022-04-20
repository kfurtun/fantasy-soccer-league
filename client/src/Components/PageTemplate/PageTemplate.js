import { clubs } from "../../assets/clubs";
import { Header } from "./Header";
import { Banner } from "./Banner";

export const PageTemplate = ({ children }) => {
  return (
    <div>
      <Header clubs={clubs} />
      <Banner />
      {children}
    </div>
  );
};
