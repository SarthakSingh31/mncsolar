'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { format, addDays, isWeekend } from 'date-fns';
import { Calendar, User, Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { AppointmentFormData } from '@/types';
import { SERVICES } from '@/lib/constants';

interface AppointmentFormProps {
  onSubmit?: (data: AppointmentFormData) => void;
}

export default function AppointmentForm({ onSubmit }: AppointmentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<AppointmentFormData>();

  const getAvailableDates = () => {
    const dates = [];
    let currentDate = addDays(new Date(), 1);
    
    for (let i = 0; i < 14; i++) {
      if (!isWeekend(currentDate)) {
        dates.push({
          value: format(currentDate, 'yyyy-MM-dd'),
          label: format(currentDate, 'EEEE, MMMM d, yyyy')
        });
      }
      currentDate = addDays(currentDate, 1);
    }
    
    return dates;
  };

  const handleFormSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        console.log('Appointment form submitted:', data);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-success-50 to-green-50 border-2 border-success-200 rounded-2xl p-10 text-center shadow-accent">
        <div className="relative mb-6">
          <div className="bg-gradient-to-br from-success-500 to-success-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <Send className="h-10 w-10 text-white" />
          </div>
          <div className="absolute -inset-1 bg-success-200/30 rounded-2xl blur -z-10"></div>
        </div>
        <h3 className="text-2xl font-bold text-success-800 mb-4">
          Appointment Request Sent!
        </h3>
        <p className="text-success-700 mb-6 leading-relaxed">
          Thank you for your interest in our solar solutions. We&apos;ll contact you within 24 hours to confirm your appointment.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-success-600 font-semibold hover:text-success-700 px-6 py-2 rounded-lg hover:bg-success-100 transition-all duration-300"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-solar p-8 border border-slate-200">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="flex items-center text-sm font-semibold text-slate-700 mb-3">
              <div className="p-1 bg-primary-100 rounded-lg mr-2">
                <User className="h-4 w-4 text-primary-600" />
              </div>
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 bg-slate-50 focus:bg-white"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2 flex items-center">
                <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="flex items-center text-sm font-semibold text-slate-700 mb-3">
              <div className="p-1 bg-accent-100 rounded-lg mr-2">
                <Phone className="h-4 w-4 text-accent-600" />
              </div>
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone', { 
                required: 'Phone number is required',
                pattern: {
                  value: /^[+]?[\d\s()-]+$/,
                  message: 'Please enter a valid phone number'
                }
              })}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-300 bg-slate-50 focus:bg-white"
              placeholder="+91 9876543210"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-2 flex items-center">
                <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                {errors.phone.message}
              </p>
            )}
          </div>
      </div>

      <div>
        <label htmlFor="email" className="flex items-center text-sm font-semibold text-slate-700 mb-3">
          <div className="p-1 bg-primary-100 rounded-lg mr-2">
            <Mail className="h-4 w-4 text-primary-600" />
          </div>
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address'
            }
          })}
          className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 bg-slate-50 focus:bg-white"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-2 flex items-center">
            <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
            Service Type *
          </label>
          <select
            id="serviceType"
            {...register('serviceType', { required: 'Please select a service type' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="h-4 w-4 inline mr-2" />
            Preferred Date *
          </label>
          <select
            id="preferredDate"
            {...register('preferredDate', { required: 'Please select a preferred date' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="">Select a date</option>
            {getAvailableDates().map((date) => (
              <option key={date.value} value={date.value}>
                {date.label}
              </option>
            ))}
          </select>
          {errors.preferredDate && (
            <p className="text-red-500 text-sm mt-1">{errors.preferredDate.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          <MessageCircle className="h-4 w-4 inline mr-2" />
          Additional Message (Optional)
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          placeholder="Tell us about your energy needs, property details, or any specific requirements..."
        />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          By submitting this form, you agree to be contacted by our team regarding your solar consultation. 
          We respect your privacy and will never share your information with third parties.
        </p>
      </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center group ${
            isSubmitting
              ? 'bg-slate-400 cursor-not-allowed'
              : 'gradient-primary text-white shadow-solar hover:shadow-lg hover:scale-[1.02]'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
              Submitting Request...
            </>
          ) : (
            <>
              <Send className="h-6 w-6 mr-3 group-hover:translate-x-1 transition-transform" />
              Book Free Consultation
            </>
          )}
        </button>
      </form>
    </div>
  );
}