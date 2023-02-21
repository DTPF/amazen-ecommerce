import avatar1 from '../../../../assets/images/userAvatar/avatar-1.png';
import avatar2 from '../../../../assets/images/userAvatar/avatar-1.png';

export const usersData = [
  {
    name: 'Admin',
    userName: 'admin',
    email: 'admin@admin.com',
    password: 'admin',
    avatar: avatar1,
    role: 'admin',
    createdAt: Date.now()
  },
  {
    name: 'User Romero',
    userName: 'User',
    email: 'user@user.es',
    password: 'user',
    avatar: avatar2,
    role: 'user',
    createdAt: Date.now()
  }
]