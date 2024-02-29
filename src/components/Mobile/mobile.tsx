import dataCars from "@/data/data";
import { CardMobile } from "./cardMobile";

export const MobileTable = () => {
  return (
    <div className=" flex flex-col">
      {dataCars.map((car) => <CardMobile key={car.name} car={car}/>)}
    </div>
  );
};
