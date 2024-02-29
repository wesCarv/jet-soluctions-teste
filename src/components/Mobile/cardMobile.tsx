import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosStar } from "react-icons/io";

interface ICar {
  name: string;
  nextReservation: string;
  status: string;
  image: string;
}
interface ICardMobile {
  car: ICar;
}
export const CardMobile = ({ car }: ICardMobile) => {
  return (
    <div
      key={car.name}
      className="flex gap-3 justify-around h-[90px] border-b-2 p-1 "
    >
      <div className="flex items-center">
         <img src={car.image} alt="" height={70} width={70} />
      </div>
      <div className="flex flex-col justify-evenly">
        <h4 className="font-semibold">{car.name}</h4>
        <h4 className="text-sm text-gray-500">
          Next reservation: {car.nextReservation}
        </h4>
        <div className="flex ">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
      </div>
      <div>
        <HiOutlineDotsVertical />
      </div>
    </div>
  );
};
