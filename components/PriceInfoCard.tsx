import Image from "next/image";

interface Props {
  title: string;
  iconSrc: string;
  value: string;
  borderColor: string;
}

const PriceInfoCard = ({ title, iconSrc, value, borderColor }: Props) => {
  return (
    <div
      className={`flex-1 min-w-[200px] flex flex-col gap-2 border-l-[3px] rounded-10 bg-white-100 px-5 py-4 border-l-[${borderColor}]`}
    >
      <p className="text-base text-gray-500">{title}</p>
      <div className="flex gap-1">
        <Image src={iconSrc} alt={title} width={24} height={24} />
        <p className="text-2xl font-bold"></p>
      </div>
    </div>
  );
};

export default PriceInfoCard;
