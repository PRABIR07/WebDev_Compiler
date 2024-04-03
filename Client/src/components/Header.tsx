import { Link } from "react-router-dom";
import { Button } from "./ui/moving-border";

export default function Header() {
  return (
    <nav className="w-full h-[60px] bg-slate-800 text-white p-3 flex justify-between items-center   ">
      <Link to={"/"}>
        <h1 className="font-bold select-none">👨‍💻 Easy To Code 👨‍💻</h1>
      </Link>
      <div className=" flex gap-2">
        <Link to={"/compiler"}>
          {" "}
          <Button
            borderRadius="1.75rem"
            className="bg-white font-bold dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <h1>Compiler</h1>
          </Button>
        </Link>
        <Link to={"/login"}>
          <button className="px-6 py-2 rounded-lg bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
            Login
          </button>
        </Link>
        <Link to={"/signup"}>
          <button className="px-6 py-2 rounded-lg bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
            Signup
          </button>
        </Link>
      </div>
    </nav>
  );
}
