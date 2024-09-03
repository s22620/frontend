import { FC } from "react";

interface LogoProps {
  src: string;
  alt: string;
}

export const Logo: FC<LogoProps> = ({ src, alt }) => {
  return (
    <div className="flex-shrink-0">
      <img className="w-auto h-8" src={src} alt={alt} />
    </div>
  );
};
