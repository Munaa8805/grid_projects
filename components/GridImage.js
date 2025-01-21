import Image from "next/image";

const GridImage = ({image}) => {
  return (
    <div className="group bg-black opacity-55 transition ease-in-out delay-150 hover:opacity-100 cursor-pointer relative">
      <Image
        className="h-auto max-w-full rounded-lg group-hover:scale-105"
        width={500}
        height={500}
        priority
        src={image.image}
        alt={image.title}
      />

      <p className="absolute px-4 text-lg text-center text-white  bottom-6 opacity-0 group-hover:opacity-100">
        {image.title}
      </p>
    </div>
  );
}

export default GridImage