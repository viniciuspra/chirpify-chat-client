import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  withText?: boolean;
  size: number;
}

export function Logo({ withText, className, size }: LogoProps) {
  return (
    <div className={cn(className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-logo"
        width={size}
        height={size}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
            strokeWidth="1.5"
          ></path>
        </g>
      </svg>
      {withText && (
        <h1 className="font-bold uppercase text-primary">Chirpify</h1>
      )}
    </div>
  );
}
