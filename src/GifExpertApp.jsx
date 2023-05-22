import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
      // console.log(newCategory)
      if(categories.includes(newCategory)) return;
      setCategories([...categories, newCategory]);
    
    };

  return (
    <div>
        <h1>GiffExpert</h1>
        <AddCategory 
        onNewCategory={event => onAddCategory(event)}
        />
        
        {
          categories.map((category) => (

            <GifGrid 
              key={category} 
              category={category} />
          ))
        }
    </div>
  );
}

export default GifExpertApp
