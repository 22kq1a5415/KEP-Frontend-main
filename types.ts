
export enum UserRole {
  STUDENT = 'STUDENT',
  TRAINER = 'TRAINER',
  HR = 'HR',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  status?: 'online' | 'offline';
  performance?: number; // 0-100
  paymentStatus?: 'pre' | 'post';
  paymentDueDate?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedBy: string;
  assignedTo: string | string[]; // Individual or Group
  dueDate: string;
  status: 'pending' | 'completed';
  priority: 'low' | 'medium' | 'high';
}

export interface LeaveRequest {
  id: string;
  userId: string;
  userName: string;
  userRole: UserRole;
  reason: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Doubt {
  id: string;
  studentId: string;
  studentName: string;
  trainerId: string;
  taskId: string;
  query: string;
  status: 'open' | 'resolved';
  timestamp: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface Course {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  duration: string;
  features: string[];
  modules: string[];
  fullPrice: number;
  registrationFee?: number;
}

export interface CourseCategory {
  title: string;
  icon: string;
  courses: Course[];
}

export interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

export interface LMSResource {
  id: string;
  title: string;
  type: 'video' | 'pdf' | 'link';
  url: string;
  thumbnail: string;
  category: string;
  date: string;
}
