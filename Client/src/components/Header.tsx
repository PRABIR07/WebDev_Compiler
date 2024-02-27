import { Link } from "react-router-dom";
import { Button } from "./ui/button";
export default function Header() {
  return (
    <nav className="w-full h-[60px] bg-slate-800 text-white p-3 flex justify-between items-center  ">
      <Link to={"/"}>
        <h1 className="font-bold select-none">👨‍💻 Easy To Code 👨‍💻</h1>
      </Link>
      <Link to={"/compiler"}>
        {" "}
        <Button variant="destructive">
          <h1 className="font-bold text-base ">Compiler</h1>
        </Button>
      </Link>
    </nav>
  );
}
