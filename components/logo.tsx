import { cn } from '../lib/utils';
import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const Logo = ({ className, width = 120, height = 40, priority = false }: LogoProps) => {
  return (
    <Image
      src="/AmbienTécnica_Logo.png"  // Ruta directa desde /public
      alt="AmbienTécnica Logo"
      width={width}
      height={height}
      className={cn("h-auto object-contain", className)}  // Tailwind + clases personalizables
      priority={priority}  // Solo si es el logo principal (above-the-fold)
    />
  );
};

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/AmbienTécnica_Logo.png"  // Mismo logo (o puedes usar otro para el ícono)
      alt="AmbienTécnica Icon"
      width={40}  // Tamaño más pequeño para íconos
      height={40}
      className={cn("size-5", className)}  // Tailwind para íconos
    />
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/AmbienTécnica_Logo.png"  // Versión alternativa si necesitas contorno
      alt="AmbienTécnica Stroke"
      width={80}
      height={80}
      className={cn("size-7 w-7", className)}
    />
  );
};