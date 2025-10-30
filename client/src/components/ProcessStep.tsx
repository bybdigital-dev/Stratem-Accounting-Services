interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-primary-foreground">{number}</span>
        </div>
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xs">{description}</p>
      </div>
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-border" />
      )}
    </div>
  );
}
