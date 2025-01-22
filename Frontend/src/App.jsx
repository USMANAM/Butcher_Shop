import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { fetchSubcategories } from "./services/api";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Chicken");
  const [subcategories, setSubcategories] = useState([]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  useEffect(() => {
    const getSubCategories = async () => {
      if (!selectedCategory) return;

      try {
        const data = await fetchSubcategories(selectedCategory);
        setSubcategories(data);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    getSubCategories();
  }, [selectedCategory]);

  const buttons = [
    {
      id: 0,
      name: "Chicken",
      value: "Chicken",
    },
    {
      id: 1,
      name: "Lamb",
      value: "Lamb",
    },
    {
      id: 2,
      name: "Beef",
      value: "Beef",
    },
    {
      id: 3,
      name: "Seafood",
      value: "Seafood",
    },
  ];

  return (
    <React.Fragment>
      <Header />

      <div className="h-full">
        <div className="w-3/6 rounded-2xl flex justify-center items-center gap-4 p-6 bg-red-300 mx-auto mt-6">
          {buttons.map((btn) => {
            return (
              <button
                key={btn.id}
                className={`rounded-3xl px-4 py-3 cursor-pointer  text-white font-bold hover:scale-105 transition-transform text-2xl ${
                  selectedCategory === btn.value
                    ? "bg-stone-600"
                    : "bg-amber-800"
                }`}
                onClick={() => handleCategoryChange(btn.value)}
              >
                {btn.name}
              </button>
            );
          })}
        </div>
        <div className="w-full mt-5 px-9 py-6 bg-slate-200 flex justify-center items-center">
          <div className="p-4 bg-white shadow-md rounded-md">
            {subcategories.length !== 0 ? (
              <div className="text-center">
                {subcategories.map((sc, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className="flex text-2xl">
                        <p className="font-semibold">{index} -</p>
                        <h2 className=" text-gray-800 font-medium">
                          {" "}
                          {sc.name}
                        </h2>
                      </div>
                      <hr className="mb-3 pb-0.5 bg-black" />
                    </React.Fragment>
                  );
                })}
              </div>
            ) : (
              <div className="animate-pulse space-y-4">
                <h1 className="text-2xl font-bold">No Data</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
