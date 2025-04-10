
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, centered = false, className }: SectionHeadingProps) => {
  return (
    <div className={cn(centered ? "text-center" : "", "mb-10", className)}>
      <h2 className="text-3xl md:text-4xl font-bold font-poppins relative inline-block">
        {title}
        <span className={`absolute h-1 bg-brand bottom-0 left-0 w-16 ${centered ? "left-1/2 -translate-x-1/2" : ""}`}></span>
      </h2>
      {subtitle && <p className="mt-4 text-gray-600 max-w-2xl">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
