import React, { useState } from 'react';
import { Home, Search, Bookmark, Users, User, ChevronDown, ChevronUp, Check, RefreshCw } from 'lucide-react';

const RecipeCard = ({ meal, recipe, onExpand, expanded, onComplete, onChange }) => (
  <div className="bg-white p-4 rounded-lg shadow mb-4">
    <div className="flex justify-between items-center">
      <h3 className="font-bold">{meal}</h3>
      <div>
        <button onClick={onComplete} className="mr-2 text-green-500">
          <Check size={20} />
        </button>
        <button onClick={onChange} className="mr-2 text-blue-500">
          <RefreshCw size={20} />
        </button>
        <button onClick={onExpand}>
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
    </div>
    <p>{recipe.name}</p>
    {expanded && (
      <div className="mt-4">
        <h4 className="font-semibold">Ingredientes:</h4>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h4 className="font-semibold mt-2">Pasos:</h4>
        <ol className="list-decimal list-inside">
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    )}
  </div>
);

const ProgressBar = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div 
      className="bg-blue-600 h-2.5 rounded-full" 
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [expandedRecipe, setExpandedRecipe] = useState(null);

  const dummyRecipes = {
    breakfast: { name: "Avena con frutas", ingredients: ["Avena", "Leche", "Frutos rojos"], steps: ["Cocinar la avena", "Añadir la leche", "Decorar con frutos rojos"] },
    lunch: { name: "Ensalada de pollo", ingredients: ["Pollo", "Lechuga", "Tomate"], steps: ["Cocinar el pollo", "Mezclar con la lechuga", "Añadir tomate"] },
    dinner: { name: "Salmón al horno", ingredients: ["Salmón", "Limón", "Especias"], steps: ["Precalentar el horno", "Sazonar el salmón", "Hornear por 20 minutos"] }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Recetas Fitness</h1>
        
        {activeTab === 'home' && (
          <>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Comidas de hoy</h2>
              <RecipeCard 
                meal="Desayuno" 
                recipe={dummyRecipes.breakfast}
                onExpand={() => setExpandedRecipe(expandedRecipe === 'breakfast' ? null : 'breakfast')}
                expanded={expandedRecipe === 'breakfast'}
                onComplete={() => {}}
                onChange={() => {}}
              />
              <RecipeCard 
                meal="Almuerzo" 
                recipe={dummyRecipes.lunch}
                onExpand={() => setExpandedRecipe(expandedRecipe === 'lunch' ? null : 'lunch')}
                expanded={expandedRecipe === 'lunch'}
                onComplete={() => {}}
                onChange={() => {}}
              />
              <RecipeCard 
                meal="Cena" 
                recipe={dummyRecipes.dinner}
                onExpand={() => setExpandedRecipe(expandedRecipe === 'dinner' ? null : 'dinner')}
                expanded={expandedRecipe === 'dinner'}
                onComplete={() => {}}
                onChange={() => {}}
              />
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Progreso</h2>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="mb-2">Comidas completadas: 2/3</p>
                <ProgressBar progress={66} />
                <p className="mt-4">Calorías: 1500/2000 kcal</p>
                <p>Proteínas: 100/120 g</p>
                <p>Carbohidratos: 180/200 g</p>
                <p>Grasas: 50/60 g</p>
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'search' && (
          <div className="bg-white p-4 rounded-lg shadow">
            <input 
              type="text" 
              placeholder="Buscar recetas..." 
              className="w-full p-2 border rounded"
            />
          </div>
        )}
        
        {activeTab === 'saved' && (
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Recetas guardadas</h2>
            <p>Aquí aparecerán tus recetas guardadas.</p>
          </div>
        )}
        
        {activeTab === 'community' && (
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Comunidad</h2>
            <p>Aquí podrás interactuar con otros usuarios.</p>
          </div>
        )}
        
        {activeTab === 'profile' && (
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Perfil de Usuario</h2>
            <p>Aquí podrás ver y editar tu perfil.</p>
          </div>
        )}
      </div>
      
      <nav className="fixed bottom-0 w-full bg-white border-t">
        <div className="flex justify-around p-2">
          <button onClick={() => setActiveTab('home')} className={`p-2 ${activeTab === 'home' ? 'text-blue-500' : ''}`}>
            <Home size={24} />
          </button>
          <button onClick={() => setActiveTab('search')} className={`p-2 ${activeTab === 'search' ? 'text-blue-500' : ''}`}>
            <Search size={24} />
          </button>
          <button onClick={() => setActiveTab('saved')} className={`p-2 ${activeTab === 'saved' ? 'text-blue-500' : ''}`}>
            <Bookmark size={24} />
          </button>
          <button onClick={() => setActiveTab('community')} className={`p-2 ${activeTab === 'community' ? 'text-blue-500' : ''}`}>
            <Users size={24} />
          </button>
          <button onClick={() => setActiveTab('profile')} className={`p-2 ${activeTab === 'profile' ? 'text-blue-500' : ''}`}>
            <User size={24} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default App;
