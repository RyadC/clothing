import './App.css';

const App = () => {

  const catgeories = [
    {
     id: 1,
     title: 'Chapeau', 
    },
    {
     id: 2,
     title: '', 
    },
    {
     id: 3,
     title: 'Baskets', 
    },
    {
     id: 4,
     title: 'Chapeau', 
    },
    {
     id: 5,
     title: 'Chapeau', 
    },
  ]

  return (
    <div className='categories-container'>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Chapeaux</h2>
          <p>Découvrir</p>
        </div>
      </div>
 
    </div>
  );
}

export default App;
