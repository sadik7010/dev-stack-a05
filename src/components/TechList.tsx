
import type { Itecnologis } from "../types";
import TechCard from "./TechCard";
interface tecnologisProps {
  tecnologis: Itecnologis[];
}
const TechList = ({ tecnologis }: tecnologisProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {tecnologis.map((tecnologi: Itecnologis) => {
        return <TechCard key={tecnologi.id} tecnologi={tecnologi} />;
      })}
    </div>
  );
};

export default TechList;
