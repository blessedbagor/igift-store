import { cn } from "@/lib/utils";
import {
  IconBodyScan,
  IconHandStop,
  IconBed,
  IconBandage,
  IconSnowflake,
  IconMoodSadDizzy,
  IconWavesElectricity,
  IconVirus,
} from "@tabler/icons-react";

export function ProblemSection() {
  const features = [
    {
      title: "Frequent Infections",
      description:
        "Recurring colds, flu, or other infections indicate a weak immune response.",
      icon: <IconVirus />,
    },
    {
      title: "Slow Wound Healing",
      description:
        "Cuts and bruises take longer to heal due to impaired immune function.",
      icon: <IconBandage />,
    },
    {
      title: "Chronic Fatigue",
      description:
        "Persistent tiredness despite adequate rest suggests immune system strain.",
      icon: <IconBed />,
    },
    {
      title: "Digestive Issues",
      description: "Frequent diarrhea, constipation, or bloating may signal gut-related immune weakness.",
      icon: <IconHandStop />,
    },
    {
      title: "Increased Allergy Sensitivity",
      description: "Heightened reactions to allergens can indicate immune system imbalance.",
      icon: <IconWavesElectricity />,
    },
    {
      title: "High Stress Levels ",
      description:
        "Prolonged stress weakens immunity, making you prone to illnesses.",
      icon: <IconMoodSadDizzy />,
    },
    {
      title: "Frequent Skin Infections & Rashes",
      description:
        "Skin issues like rashes, eczema, or infections may point to immune dysfunction.",
      icon: <IconBodyScan />,
    },
    {
      title: "Cold Hands & Feet",
      description: "Poor circulation due to immune-related inflammation can cause temperature sensitivity.",
      icon: <IconSnowflake />,
    },
  ];

  return (
    <>
      <div className="px-8">
        <h4 className="mt-60 mb-20 text-4xl lg:text-7xl lg:leading-tight max-w-7xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
        If you have any of these signs, your immune system is weakened.
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 w-full mx-auto mt-40">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-gold transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-300">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 font-mono">
        {description}
      </p>
    </div>
  );
};
