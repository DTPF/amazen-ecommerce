/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Sections.scss';

import echoShowImg from '../../../../../../uploads/sections/echo-show.png';
import gatoProgramadorImg from '../../../../../../uploads/sections/gato-programador.jpg';
import helpImg from '../../../../../../uploads/sections/ayuda.png';
import informaticaImg from '../../../../../../uploads/sections/informatica.png';
import outletImg from '../../../../../../uploads/sections/outlet.png';
import kitchenImg from '../../../../../../uploads/sections/cocina.png';
import giftImg from '../../../../../../uploads/sections/gift.png';
import beautyImg from '../../../../../../uploads/sections/beauty.png';

export default function Sections(props) {
  const sectionsLs = localStorage.getItem('sections');
  const sectionsParse = JSON.parse(sectionsLs);
  !sectionsLs && localStorage.setItem('sections', JSON.stringify(sections))

  return (
    <div className='sections'>
      {sectionsParse && sectionsParse.map((category, index) => (
        <CategorySlide key={index} title={category.title} img={category.img} linkName={category.linkName} link={category.link} />
      ))}
    </div>
  );
}

function CategorySlide(props) {
  const { title, img, linkName, link } = props;

  return (
    <div className='sections__section'>
      <h3 className='sections__section--title'>{title}</h3>
      <img className='sections__section--image' src={img} alt={title} />
      <a className='sections__section--anchor' target='_blank' href={link}>{linkName}</a>
    </div>
  )
}

const sections = [
  {
    title: 'Echo Show 10',
    img: echoShowImg,
    linkName: 'Ver más',
    link: ''
  },
  {
    title: 'Ayuda a la gente de Turquía y Siria',
    img: helpImg,
    linkName: 'Si puedes, colabora',
    link: ''
  },
  {
    title: 'Informática y accesorios',
    img: informaticaImg,
    linkName: 'Descubre más',
    link: ''
  },
  {
    title: 'Ofertas en Outlet',
    img: outletImg,
    linkName: 'Explora ahora',
    link: ''
  },
  {
    title: 'Ideas para Casa y cocina',
    img: kitchenImg,
    linkName: 'Saber más',
    link: ''
  },
  {
    title: '¿Buscas un regalo?',
    img: giftImg,
    linkName: 'Descubre algunas ideas',
    link: ''
  },
  {
    title: 'Lo mejor en belleza',
    img: beautyImg,
    linkName: 'Explora ahora',
    link: ''
  },
  {
    title: 'Todo para tu gato programador',
    img: gatoProgramadorImg,
    linkName: '¡A programar!',
    link: 'https://www.google.com/search?q=gato+programador&sxsrf=AJOqlzWdjssiku06SEjCSG0F7I0Pym5ATg:1676560525810&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi3_NbUqpr9AhVdUqQEHVCKAdAQ_AUoAXoECAEQAw&biw=2560&bih=1500&dpr=1'
  }
]