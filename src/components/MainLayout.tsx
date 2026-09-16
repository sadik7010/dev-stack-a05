import TechList from "./TechList";
import type { Itecnologis } from "../types";
import { use } from "react";
import Sidebar from "./Sidebar";
interface tecnologisProps {
  tecnologisPromis: Promise<Itecnologis[]>;
}
const MainLayout = ({ tecnologisPromis }: tecnologisProps) => {
  console.log(tecnologisPromis);
  const tecnologis = use(tecnologisPromis);
  console.log(tecnologis);
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-3xl ">
        Explore the{" "}
        <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
          Technologies
        </span>
      </h1>
      <p className="text-[#64748B]">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 m-5">
        <main className="md:col-span-3">
          <TechList tecnologis={tecnologis}></TechList>
        </main>
        <aside className="md:col-span-1">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
};

export default MainLayout;
