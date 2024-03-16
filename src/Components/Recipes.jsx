import { useEffect, useState } from "react";
import Cart from "./Cart";
import Recipe from "./Recipe";


const Recipes = () => {
    const [recipe, setRecipe] = useState([]);
    const [cookCart, setCookCart] = useState([]);

    useEffect(() => {
        fetch("./recipe.json")
        .then(res => res.json())
        .then (data => setRecipe(data))
    } ,[])

    const wantToCook = (item) => {
        
        const isExist = cookCart.find(c => c.recipe_id == item.recipe_id);
        if(!isExist){
            console.log(item);
            const newCart = [...cookCart, item];
            setCookCart(newCart);
        }else{
            console.log("wrong");
        }
    }

    const [cooking, setCooking] = useState([]);

    const addToCurrentlyCooking = (cookingCart) => {
        const updatedCookCart = cookCart.filter(c => c.recipe_id != cookingCart.recipe_id);
        setCookCart(updatedCookCart);

        const isExist = cooking.find(c => c.recipe_id == cookingCart.recipe_id);
        if(!isExist){
            const newCart = [...cooking, cookingCart];
            setCooking(newCart);
        }else{
            console.log("wrong");
        }
    }
    // console.log(cookCart);
    const [count, setCount] = useState(0);
    return (
        <div className="mt-14 md:mt-[100px] text-center">
            <button onClick={() => setCount(count + 1)}>hello : {count}</button>
            <h2 className="text-3xl md:text-[40px] font-semibold">Our Recipes</h2>
            <p className="text-base font-medium text-[#150b2bb3] max-w-[820px] mx-auto pt-3 md:pt-6">Dive into a collection of curated recipes, each promising to transform simple ingredients into a masterpiece on your plate. Taste the magic!</p>
            <div className="flex flex-col md:flex-row mt-8 md:mt-12 gap-6">
                <div className='md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        recipe.map(recipe => <Recipe
                        key={recipe.recipe_id}    
                        recipe={recipe}
                        wantToCook={wantToCook}
                        ></Recipe>)
                    }
                </div>
                <Cart 
                cookCart={cookCart} 
                addToCurrentlyCooking={addToCurrentlyCooking}
                cooking={cooking}
                ></Cart>
            </div>
        </div>
    );
};

export default Recipes;