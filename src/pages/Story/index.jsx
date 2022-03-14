import React from 'react';
import { Link } from 'react-router-dom';

export const Story = () => {
  return (
    <div>
      <div className='neon blur' />
      <div className="story-container">
        <h1 className='story-header'>GENESIS</h1>
        <div className='story-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, quibusdam a expedita quasi cupiditate dolor accusamus optio quos numquam animi veniam esse quam earum cumque voluptates nesciunt eius illo totam quae enim sapiente sequi assumenda similique. Iste distinctio ipsam laborum totam necessitatibus fugiat deserunt culpa doloremque? Laboriosam non aliquam consequatur quia, sequi tenetur nobis. Ex nisi nam dolore dolorem eius voluptatibus ad neque. Non quo mollitia assumenda ratione, minus nostrum earum optio. Animi, fugiat. Magni voluptate et necessitatibus dolore vel.</div>
      </div>
      <div className="story-link"><Link to='/next' className="link">FIGHT FOR FREEDOM →</Link></div>
    </div>
  );
};