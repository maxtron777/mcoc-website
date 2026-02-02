import { stats } from '@/lib/utils';

export default function StatsSection() {
  return (
    <section className="py-16 bg-secondary-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-200 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
