import dataCars from "@/data/data";
import { IoIosStar } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";



export const Table = () => {
  return (
    <table className="w-full " >
      <tr className="text-left text-slate-400">
        <th className="border">Car</th>
        <th className="border">Next Reservation</th>
        <th className="border">Status</th>
        <th className="border">Rating</th>
        <th className="border">Actions</th>
      </tr>

      {dataCars.map((car) => {
        return (
          <tr key={car.name} className="h-16 even:bg-slate-50 ">
            <td className="border ">
              <div className="flex">
                <img width={40} src={car.image} alt="" />
                <p className="m-2">{car.name}</p>
              </div>
            </td>
            <td className="border text-slate-400">{car.nextReservation}</td>
            <td className="border ">
              <span
                className={
                  car.status == "Avaliable"
                    ? "bg-emerald-200 bg-opacity-80 text-emerald-800 rounded-md px-[10px] py-[6px] w-8"
                    : "bg-red-200 bg-opacity-80 text-red-800 rounded-md px-[10px] py-[6px] w-8"
                }
              >
                {car.status}
              </span>
            </td>
            <td className="border">
              <div className="flex">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
            </td>
            <td className="border">
              <div className=" ">
                <HiOutlineDotsVertical />
              </div>
            </td>
          </tr>
        );
      })}
    </table>
  );
};
