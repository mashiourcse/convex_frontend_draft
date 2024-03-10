import React, { createContext, useState } from 'react';


export const NutritionContext = createContext();

export const NutritionProvider = ({ children }) => {

  const [nutritionData, setNutritionData] = useState({
    proteins: 0,
    fats: 0,
    carbs: 0,
    vitamins: 0,
    minerals: 0,
    water: 0
  });


  const updateNutritionData = (newData) => {
    setNutritionData(newData);
  };

  return (
    <NutritionContext.Provider value={{ nutritionData, updateNutritionData }}>
      {children}
    </NutritionContext.Provider>
  );
};
