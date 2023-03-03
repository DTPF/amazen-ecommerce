import toast from 'react-hot-toast';

export default function toaster(message, icon) {
  switch (icon) {
    case 'success':
      toast.success(message, {
        style: {
          border: '1px solid #232F3E',
          padding: '10px',
          color: '#232F3E',
          backgroundColor: '#FFF',
          boxShadow: '0px -1px 30px 5px rgba(0,0,0,0.15)'
        },
        iconTheme: {
          primary: '#01AC47',
          secondary: '#FFFAEE',
        },
      });
      break;

    case 'error':
      toast.error(message, {
        style: {
          border: '1px solid #232F3E',
          padding: '10px',
          color: '#232F3E',
          backgroundColor: '#FFF',
          boxShadow: '0px -1px 30px 5px rgba(0,0,0,0.15)'
        },
        iconTheme: {
          primary: '#C80400',
          secondary: '#FFFAEE',
        },
      });
      break;

    default:
      toast(message, {
        style: {
          border: '1px solid #232F3E',
          padding: '10px',
          color: '#232F3E',
          backgroundColor: '#FFF',
          boxShadow: '0px -1px 30px 5px rgba(0,0,0,0.15)'
        }
      });
      break;
  }
}