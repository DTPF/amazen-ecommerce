/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Sections.scss';
import useGetSections from '../../../../../../indexedDB/api/sections/useGetSections';

export default function Sections() {
  const sections = useGetSections();

  return (
    <div className='sections'>
      {sections.sectionsIndexed && sections.sectionsIndexed.map((category, index) => (
        category.isActive &&
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