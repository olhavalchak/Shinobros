import React from 'react';
import { Link } from 'react-router-dom';

export const StoryNext = () => {
  return (
    <div>
      <div className='neon blur' />
      <div className="story-container">
        <h1 className='story-header'>FIGHT FOR FREEDOM</h1>
        <div className='story-text'>
          <div className='flex-text'>Genesis are everywhere...</div>
          <div className='flex-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, debitis.</div>
          <div className='flex-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quasi dicta et animi architecto aliquam ullam quibusdam incidunt a hic in quo eligendi maxime fugit excepturi ad consectetur iusto dolorem harum reprehenderit, enim illo perferendis culpa aut. Minima, natus et.</div>
        </div>
        {/* <div className='story-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, quibusdam a expedita quasi cupiditate dolor accusamus optio quos numquam animi veniam esse quam earum cumque voluptates nesciunt eius illo totam quae enim sapiente sequi assumenda similique. Iste distinctio ipsam laborum totam necessitatibus fugiat deserunt culpa doloremque? Laboriosam non aliquam consequatur quia, sequi tenetur nobis. Ex nisi nam dolore dolorem eius voluptatibus ad neque. Non quo mollitia assumenda ratione, minus nostrum earum optio. Animi, fugiat. Magni voluptate et necessitatibus dolore vel.</div> */}
      </div>
      <div className="story-link flex-link">
        <div><Link  className="link" to='/story'>← GENESIS</Link></div>
        <div>TO BE CONTINUED</div>
      </div>
    </div>
  );
};