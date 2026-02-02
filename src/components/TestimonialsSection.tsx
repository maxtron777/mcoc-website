import { Star } from 'lucide-react';
import { testimonials } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-600 mb-6 leading-relaxed">
        &ldquo;{content}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
          <span className="text-primary-500 font-semibold text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-secondary-500">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from the families and individuals we have had the privilege to support
            on their journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
