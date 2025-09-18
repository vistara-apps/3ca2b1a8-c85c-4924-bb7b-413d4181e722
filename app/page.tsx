'use client';

import { useState, useEffect } from 'react';
import { AppShell } from '@/components/AppShell';
import { TaskCard } from '@/components/TaskCard';
import { Button } from '@/components/Button';
import { NotificationBanner } from '@/components/NotificationBanner';
import { PostErrandModal } from '@/components/PostErrandModal';
import { MapView } from '@/components/MapView';
import { mockTasks, mockUsers } from '@/lib/mockData';
import { Task } from '@/lib/types';

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    variant: 'info' | 'success' | 'warning';
  } | null>(null);

  // Auto-hide notifications
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleAcceptTask = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.taskId === taskId 
        ? { ...task, status: 'accepted' as const }
        : task
    ));
    setNotification({
      message: 'Task accepted! Contact the requester to coordinate.',
      variant: 'success'
    });
  };

  const handleCompleteTask = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.taskId === taskId 
        ? { ...task, status: 'completed' as const, completedAt: new Date() }
        : task
    ));
    setNotification({
      message: 'Task marked as complete! Payment will be released.',
      variant: 'success'
    });
  };

  const handlePostErrand = async (errandData: {
    description: string;
    paymentAmount: number;
    location: string;
  }) => {
    const newTask: Task = {
      taskId: Date.now().toString(),
      requesterId: '1', // Mock current user
      description: errandData.description,
      paymentAmount: errandData.paymentAmount,
      paymentToken: 'ETH',
      status: 'pending',
      location: errandData.location,
      distance: '0.1 mi', // Mock distance
      createdAt: new Date(),
      requester: mockUsers[0], // Mock current user
    };

    setTasks(prev => [newTask, ...prev]);
    setNotification({
      message: 'Errand posted successfully! Waiting for someone to accept.',
      variant: 'success'
    });
  };

  return (
    <AppShell>
      {/* Header */}
      <div className="py-6">
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Errandly
        </h1>
        <p className="text-text-secondary">
          Your hyperlocal task network
        </p>
      </div>

      {/* Notification */}
      {notification && (
        <NotificationBanner
          variant={notification.variant}
          onClose={() => setNotification(null)}
          className="mb-4"
        >
          {notification.message}
        </NotificationBanner>
      )}

      {/* Map View */}
      <MapView />

      {/* Tagline */}
      <div className="mb-6">
        <p className="text-text-secondary text-center">
          You mail small errands for mail eeraley
        </p>
      </div>

      {/* Post Errand Button */}
      <div className="mb-6">
        <Button
          onClick={() => setIsPostModalOpen(true)}
          className="w-full"
          size="lg"
        >
          + Post an Errand
        </Button>
      </div>

      {/* Task Feed */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-text-primary">
          Nearby Errands
        </h2>
        
        {tasks.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-text-secondary">
              No errands available right now.
            </p>
            <p className="text-text-secondary text-sm mt-2">
              Be the first to post one!
            </p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.taskId}
              task={task}
              onAccept={handleAcceptTask}
              onComplete={handleCompleteTask}
            />
          ))
        )}
      </div>

      {/* Post Errand Modal */}
      <PostErrandModal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
        onSubmit={handlePostErrand}
      />
    </AppShell>
  );
}
