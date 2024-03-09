import {
  EyeIcon,
  ExclamationTriangleIcon,
  RocketLaunchIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import Header from "../components/Header";

const features = [
  {
    name: "Playful penalties",
    description:
      "Spice up the game with fun penalties for wrong answers. Take a shot or sip your drink.",
    icon: ExclamationTriangleIcon,
  },
  {
    name: "Diverse Quiz categories",
    description:
      "Choose from a wide array of categories: music, true/false, open-ended, and more. Engage in different challenges, from pinning locations to closest guesses.",
    icon: TagIcon,
  },
  {
    name: "Join in seconds",
    description:
      "Getting started is a breeze. Just enter a code on your phone and you're in. Perfect for quick setups at parties or family game nights.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Fair play system",
    description:
      "Our system tracks scores with precision, ensuring a fair game for all. No room for cheating here, just honest fun and competition.",
    icon: EyeIcon,
  },
];

export default function LearnMore() {
  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Kwishet
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Quiz, play, lose? Shot time! Turn knowledge into the Ultimate Party Game.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Dive into a world of pub quizzes for sheer fun, not for learning. Perfect for a night out with friends or a cozy evening at home with family. It's all about laughter, challenges, and creating memorable moments together.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
