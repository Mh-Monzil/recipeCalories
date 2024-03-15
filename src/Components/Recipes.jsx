import { useEffect, useState } from "react";
import Cart from "./Cart";
import Recipe from "./Recipe";


const Recipes = () => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch("./recipe.json")
        .then(res => res.json())
        .then (data => setRecipe(data))
    } ,[])

    return (
        <div className="mt-[100px] text-center">
            <h2 className="text-[40px] font-semibold">Our Recipes</h2>
            <p className="text-base font-medium text-[#150b2bb3] w-[820px] mx-auto pt-6">Dive into a collection of curated recipes, each promising to transform simple ingredients into a masterpiece on your plate. Taste the magic!</p>
            <div className="flex mt-12 gap-6">
                <div className='w-3/5 bg-teal-400 grid grid-cols-2 gap-6'>
                    {
                        recipe.map(recipe => <Recipe
                        key={recipe.recipe_id}    
                        recipe={recipe}
                        ></Recipe>)
                    }
                </div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Recipes;