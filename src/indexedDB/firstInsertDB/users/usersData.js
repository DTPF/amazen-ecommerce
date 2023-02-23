import avatar1 from '../../../../assets/images/userAvatar/avatar-1.png';
import avatar2 from '../../../../assets/images/userAvatar/avatar-1.png';

export const usersData = [
  {
    name: 'Admin',
    lastname: 'Admin',
    userName: 'admin',
    email: 'admin@admin.com',
    password: 'admin',
    avatar: avatar1,
    role: 'admin',
    createdAt: Date.now()
  },
  {
    name: 'User',
    lastname: 'Romero',
    userName: 'user',
    email: 'user@user.es',
    password: 'user',
    avatar: avatar2,
    role: 'user',
    createdAt: Date.now()
  }
]