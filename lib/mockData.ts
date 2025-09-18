import { Task, User } from './types';

export const mockUsers: User[] = [
  {
    userId: '1',
    farcasterId: 'alice.eth',
    ensName: 'alice.eth',
    reputationScore: 4.8,
    completedTasksCount: 23,
    postedTasksCount: 12,
    createdAt: new Date('2024-01-15'),
  },
  {
    userId: '2',
    farcasterId: 'bob.base',
    reputationScore: 4.6,
    completedTasksCount: 18,
    postedTasksCount: 8,
    createdAt: new Date('2024-02-01'),
  },
  {
    userId: '3',
    farcasterId: 'charlie.fc',
    reputationScore: 4.9,
    completedTasksCount: 31,
    postedTasksCount: 15,
    createdAt: new Date('2024-01-20'),
  },
];

export const mockTasks: Task[] = [
  {
    taskId: '1',
    requesterId: '1',
    description: 'Pick up coffee - small errands for minimal heavy and',
    paymentAmount: 0.005,
    paymentToken: 'ETH',
    status: 'pending',
    location: 'Downtown',
    distance: '0.3 mi',
    createdAt: new Date(),
    requester: mockUsers[0],
  },
  {
    taskId: '2',
    requesterId: '2',
    description: 'Walk over the dog - new job for minimal payments',
    paymentAmount: 0.008,
    paymentToken: 'ETH',
    status: 'pending',
    location: 'Park District',
    distance: '0.5 mi',
    createdAt: new Date(Date.now() - 1000 * 60 * 30),
    requester: mockUsers[1],
  },
  {
    taskId: '3',
    requesterId: '3',
    description: 'Post an Errand',
    paymentAmount: 0.003,
    paymentToken: 'ETH',
    status: 'pending',
    location: 'City Center',
    distance: '0.8 mi',
    createdAt: new Date(Date.now() - 1000 * 60 * 60),
    requester: mockUsers[2],
  },
];
