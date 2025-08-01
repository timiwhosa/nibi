import Image from "next/image";
interface IconProps {
  name: string; 
  alt?: string;
  className?: string;
  style?: object;
}
export default function Icon({
  name,
  alt,
  className = "w-6 h-6",
  style = {},
}: IconProps) {
  return (
    <Image
      src={"/img/icons/" + name + ".svg"}
      alt={alt || name}
      className={className}
      style={style}
      width={60}
      height={60}
    />
  );
}
