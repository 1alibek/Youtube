// icon
import profil from "../../../../assets/img/pr.png";
const Card = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <img
          src={data.thumbnail}
          alt=""
          className=" w-[100%] h-[150px] object-contain"
        />
      </div>
      <div className="flex  gap-2">
        <img className=" w-[30px] h-[30px]" src={profil} alt="" />
        <div>
          <h1 className="opacity-80 leading-[140%]">{data.title}</h1>
          <div className="flex gap-2">
            <p className="font-normal text-[10px]">{data.views}</p>
            <p className="font-normal text-[10px]">{data.uploaded}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
