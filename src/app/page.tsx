import {  Table } from "@/components/Header/TableHeader";
import { MobileTable } from "@/components/Mobile/mobile";

export default function Home() {
  return (
    <main className="flex justify-center items-center ">
      <div className="md:w-[650px] sm:block hidden lg:w-[900px] ">
        <Table />
      </div>
      <div className="sm:hidden">
      <MobileTable/>
      </div>
    </main>
  );
}
