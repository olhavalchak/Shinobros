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
      </div>
      <div className="story-link flex-link">
        <div><Link  className="link" to='/story'>← GENESIS</Link></div>
        <div>TO BE CONTINUED</div>
      </div>
    </div>
  );
};
