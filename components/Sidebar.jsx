import Link from "next/link";
import React, { useEffect } from "react";
import { useSidebar } from "../store/store";

function Sidebar() {
  const { active, setactive } = useSidebar();
  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <section
      className={`h-[80vh] w-[20vw] overflow-y-hidden bg-gray-900 sticky top-0 left-0 rounded-lg font-dm`}
    >
      <ul className="p-4 rounded-md">
        <Link href={"/dashboard"} onClick={() => setactive("dashboard")}>
          <li
            className={`${
              active === "dashboard" ? "bg-slate-500" : ""
            } list-none text-white text-lg p-2 rounded mb-4`}
          >
            Dashboard
          </li>
        </Link>
        <Link href={"/yourProjects"} onClick={() => setactive("yourproject")}>
          <li
            className={`${
              active === "project" ? "bg-slate-500" : ""
            } list-none text-white text-lg p-2 rounded-md mb-4`}
          >
            Your Projects
          </li>
        </Link>
        <Link href={"/addProject"} onClick={() => setactive("addproject")}>
          <li
            className={`${
              active === "idea" ? "bg-slate-500" : ""
            } list-none text-white text-lg p-2 rounded-md justify-center mb-4 `}
          >
            Add Your Projects
          </li>
        </Link>
      </ul>
    </section>
  );
}

export default Sidebar;
