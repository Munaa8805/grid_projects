import Image from "next/image";

const GridImage = ({image}) => {
  return (
    <div className="group bg-black opacity-55 transition ease-in-out delay-150 hover:opacity-100 cursor-pointer ">
      <Image
        className="h-auto max-w-full rounded-lg group-hover:scale-105"
        width={500}
        height={500}
        priority
        src={image.image}
        alt={image.title}
      />
    </div>
  );
}

export default GridImage