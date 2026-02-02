'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { services } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  privacy?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.privacy) {
      newErrors.privacy = 'You must agree to the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In production, you would send the data to your backend here
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        privacy: false,
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div
          className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg"
          role="alert"
          aria-live="polite"
        >
          <p className="font-semibold">Thank you for your message!</p>
          <p>We will get back to you within 24-48 hours.</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div
          className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg"
          role="alert"
          aria-live="polite"
        >
          <p className="font-semibold">Something went wrong</p>
          <p>Please try again or call us directly.</p>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name <span className="text-red-500" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email <span className="text-red-500" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="04XX XXX XXX"
        />
      </div>

      {/* Service Interest Dropdown */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white"
        >
          <option value="">Select a service (optional)</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message <span className="text-red-500" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          rows={5}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-y ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Tell us how we can help you..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Privacy Policy Checkbox */}
      <div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={errors.privacy ? 'true' : 'false'}
            aria-describedby={errors.privacy ? 'privacy-error' : undefined}
            className="mt-1 h-4 w-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            I agree to the{' '}
            <a
              href="/privacy-policy"
              className="text-primary-500 hover:text-primary-600 underline"
            >
              Privacy Policy
            </a>{' '}
            and consent to My Circles of Care collecting and storing my information to respond to my enquiry.{' '}
            <span className="text-red-500" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
        </div>
        {errors.privacy && (
          <p id="privacy-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.privacy}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 text-white font-semibold rounded-lg transition-colors duration-200 text-lg shadow-md hover:shadow-lg disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      {/* Required Fields Note */}
      <p className="text-sm text-gray-500">
        <span className="text-red-500" aria-hidden="true">*</span> Required fields
      </p>
    </form>
  );
}
