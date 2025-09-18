'use client';

import { useState } from 'react';
import { Button } from './Button';
import { TextInput } from './TextInput';

interface PostErrandModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (errand: {
    description: string;
    paymentAmount: number;
    location: string;
  }) => void;
}

export function PostErrandModal({ isOpen, onClose, onSubmit }: PostErrandModalProps) {
  const [description, setDescription] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim() || !paymentAmount || !location.trim()) return;

    setIsSubmitting(true);
    try {
      await onSubmit({
        description: description.trim(),
        paymentAmount: parseFloat(paymentAmount),
        location: location.trim(),
      });
      
      // Reset form
      setDescription('');
      setPaymentAmount('');
      setLocation('');
      onClose();
    } catch (error) {
      console.error('Error posting errand:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-surface rounded-lg p-6 w-full max-w-md shadow-modal animate-slide-up">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-text-primary">Post an Errand</h2>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            label="What do you need help with?"
            variant="textarea"
            placeholder="e.g., Pick up coffee from downtown cafe"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            required
          />

          <TextInput
            label="Payment Amount (ETH)"
            type="number"
            step="0.001"
            min="0.001"
            placeholder="0.005"
            value={paymentAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaymentAmount(e.target.value)}
            required
          />

          <TextInput
            label="Location"
            placeholder="e.g., Downtown, Park District"
            value={location}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
            required
          />

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={isSubmitting || !description.trim() || !paymentAmount || !location.trim()}
            >
              {isSubmitting ? 'Posting...' : 'Post Errand'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
