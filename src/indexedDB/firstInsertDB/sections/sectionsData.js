import echoShowImg from '../../../uploads/sections/echo-show.png';
import gatoProgramadorImg from '../../../uploads/sections/gato-programador.jpg';
import helpImg from '../../../uploads/sections/ayuda.png';
import informaticaImg from '../../../uploads/sections/informatica.png';
import outletImg from '../../../uploads/sections/outlet.png';
import kitchenImg from '../../../uploads/sections/cocina.png';
import giftImg from '../../../uploads/sections/gift.png';
import beautyImg from '../../../uploads/sections/beauty.png';

export const sectionsData = [
  {
    title: 'Los más vendidos',
    img: echoShowImg,
    linkName: 'Ver más',
    linkRouter: '/products/all',
    isActive: true
  },
  {
    title: 'Ayuda a la gente de Turquía y Siria',
    img: helpImg,
    linkName: 'Si puedes, colabora',
    link: 'https://www2.cruzroja.es/-/ayuda-victimas-terremoto-turquia',
    isActive: true
  },
  {
    title: 'Todo para tu gato programador',
    img: gatoProgramadorImg,
    linkName: '¡A programar!',
    link: 'https://www.google.com/search?q=gato+programador&sxsrf=AJOqlzWdjssiku06SEjCSG0F7I0Pym5ATg:1676560525810&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi3_NbUqpr9AhVdUqQEHVCKAdAQ_AUoAXoECAEQAw&biw=2560&bih=1500&dpr=1',
    isActive: true
  },
  {
    title: 'Amazén Basics',
    img: informaticaImg,
    linkName: 'Descubre más',
    linkRouter: '/products/all',
    isActive: true
  },
  {
    title: 'Atención al Cliente',
    img: outletImg,
    linkName: 'Explora ahora',
    linkRouter: '/help',
    isActive: true
  },
  {
    title: 'Ideas para Casa y cocina',
    img: kitchenImg,
    linkName: 'Saber más',
    linkRouter: '/comming-soon',
    isActive: true
  },
  {
    title: '¿Buscas un regalo?',
    img: giftImg,
    linkName: 'Descubre algunas ideas',
    linkRouter: '/comming-soon',
    isActive: true
  },
  {
    title: 'Lo mejor en belleza',
    img: beautyImg,
    linkName: 'Explora ahora',
    linkRouter: '/comming-soon',
    isActive: true
  }
]