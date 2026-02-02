import Link from 'next/link';
import { LucideIcon, Users, Heart, FileText, Home, Users2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

// Icon mapping for services
const iconMap: Record<string, LucideIcon> = {
  Users: Users,
  Heart: Heart,
  FileText: FileText,
  Home: Home,
  Users2: Users2,
  Sparkles: Sparkles,
};

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export default function ServiceCard({
  id,
  title,
  description,
  icon,
  className,
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Users;

  return (
    <div
      className={cn(
        'group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200',
        className
      )}
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-primary-50 group-hover:bg-primary-100 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
        <IconComponent className="w-7 h-7 text-primary-500" />
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl font-semibold text-secondary-500 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Learn More Link */}
      <Link
        href={`/services/${id}`}
        className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors group/link"
      >
        Learn More
        <svg
          className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
}
