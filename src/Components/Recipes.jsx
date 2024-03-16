import { useEffect, useState } from "react";
import Cart from "./Cart";
import Recipe from "./Recipe";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Recipes = () => {
    const [recipe, setRecipe] = useState([]);
    const [cookCart, setCookCart] = useState([]);
    const [cooking, setCooking] = useState([]);
    const [wantToCookCount, setWantToCookCount] = useState(0);
    const [currentCookCount, setCurrentCookCount] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalory, setTotalCalory] = useState(0);

    useEffect(() => {
        fetch("./recipe.json")
        .then(res => res.json())
        .then (data => setRecipe(data))
    } ,[])

    const wantToCook = (item) => {
        const isExist = cookCart.find(c => c.recipe_id == item.recipe_id);
        const alreadyAdded = cooking.find(c => c.recipe_id == item.recipe_id)
        if(!isExist && !alreadyAdded){
            console.log(item);
            const newCart = [...cookCart, item];
            setCookCart(newCart);
            toast.success("Recipe added successfully")

            setWantToCookCount(wantToCookCount + 1);
        }else{
            toast.error("Recipe already exists")
        }
    }
    
    const addToCurrentlyCooking = (cookingCart) => {
        const updatedCookCart = cookCart.filter(c => c.recipe_id != cookingCart.recipe_id);
        setCookCart(updatedCookCart);

        const isExist = cooking.find(c => c.recipe_id == cookingCart.recipe_id);
        if(!isExist){
            const newCart = [...cooking, cookingCart];
            setCooking(newCart);

            setCurrentCookCount(currentCookCount + 1);
            setWantToCookCount(wantToCookCount - 1);

            setTotalTime(cookingCart.preparing_time + totalTime);
            setTotalCalory(cookingCart.calories + totalCalory);
        }else{
            console.log("wrong");
        }
    }

    return (
        <div className="mt-14 md:mt-[100px] text-center">
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
                currentCookCount={currentCookCount}
                wantToCookCount={wantToCookCount}
                totalTime={totalTime}
                totalCalory={totalCalory}
                ></Cart>
            </div>
        </div>
    );
};

export default Recipes;