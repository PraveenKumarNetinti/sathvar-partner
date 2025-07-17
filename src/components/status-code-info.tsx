import { cn } from "@/utils/cn";

type StatusCodeInfoProps = {
  statusCode?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function StatusCodeInfo({
  statusCode,
  title,
  description,
  children,
  className,
}: StatusCodeInfoProps) {
  return (
    <div className={cn("w-full h-full grid place-items-center", className)}>
      <div className="container mx-auto flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
        <h1 className="font-poppins text-stroke text-[8em] leading-[1em] md:text-[16em] md:leading-[16rem] font-black text-transparent">
          {statusCode}
        </h1>
        <div className="mt-12 flex flex-col items-center space-y-4">
          <div className="text-title-h6 text-gray-800 text-center mt-2">{title}</div>
          <p className="text-label-md text-text-soft-400 mx-auto max-w-80 text-center font-normal">
            {description}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}
