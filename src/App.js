import './App.css';

const App = () => {

  const catgeories = [
    {
     id: 1,
     title: 'Chapeau', 
    },
    {
     id: 2,
     title: 'Vestes', 
    },
    {
     id: 3,
     title: 'Baskets', 
    },
    {
     id: 4,
     title: 'Femmes', 
    },
    {
     id: 5,
     title: 'Hommes', 
    },
  ]

  return (
    <div className='categories-container'>
      {catgeories.map((category) => (
         <div className='category-container'>
          {/* <img /> */}
          <div className='category-body-container'>
            <h2>{category.title}</h2>
            <p>Découvrir</p>
          </div>
        </div>
      ))}
 
    </div>
  );
}

export default App;
