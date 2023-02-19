import avatar1 from '../../../../assets/images/userAvatar/avatar-1.png';
import avatar2 from '../../../../assets/images/userAvatar/avatar-1.png';

export const usersData = [
  {
    name: 'David Pizarro',
    userName: 'David',
    email: 'd@mail.es',
    password: '12345',
    avatar: avatar1,
    role: 'admin',
    createdAt: Date.now()
  },
  {
    name: 'Pepe Romero',
    userName: 'Pepín',
    email: 'pepo@mail.es',
    password: '12345',
    avatar: avatar2,
    role: 'user',
    createdAt: Date.now()
  }
]