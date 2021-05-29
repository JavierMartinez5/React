import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categoryNames, setCategoryNames] = useState([]);

  useEffect(() => {
    const categories = menuItems.map(item => item.category);
    setCategoryNames(getUnicNames(categories));
  }, [])
  
  const getUnicNames = (categories) => {
    console.log(categories)
    let unicNames = [];
    categories.forEach(name => {
      const isInclude = unicNames.includes(name);
      if (!isInclude) {
        unicNames.push(name);
      }
    })
    return ['all', ...unicNames];
  }
  const filterCategories = (menueCategory) => {
    if (menueCategory === 'all') {
      setMenuItems(items);
      return;
    }
    const filtredMenuItems = items.filter(item => item.category === menueCategory);
    setMenuItems(filtredMenuItems);
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menue</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categoryNames} filterCategories={filterCategories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
