export interface User {
  userId: string;
  farcasterId?: string;
  ensName?: string;
  reputationScore: number;
  completedTasksCount: number;
  postedTasksCount: number;
  createdAt: Date;
}

export interface Task {
  taskId: string;
  requesterId: string;
  completerId?: string;
  description: string;
  paymentAmount: number;
  paymentToken: string;
  status: 'pending' | 'accepted' | 'completed' | 'cancelled';
  location: string;
  distance?: string;
  createdAt: Date;
  completedAt?: Date;
  requester?: User;
  completer?: User;
}

export interface Rating {
  ratingId: string;
  taskId: string;
  raterId: string;
  ratedUserId: string;
  ratingValue: number;
  comment?: string;
  createdAt: Date;
}

export type TaskStatus = 'pending' | 'accepted' | 'completed' | 'cancelled';
