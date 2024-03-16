import PropTypes from 'prop-types'
import { FaFireFlameCurved, FaRegClock } from "react-icons/fa6";

const Recipe = ({recipe}) => {
    console.log(recipe);
    const {recipe_name, short_description, recipe_image, preparing_time, ingredients, recipe_id, calories} = recipe;
    return (
        <div className="card max-w-96 mx-auto p-5 text-start  shadow-lg">
            <figure><img className='rounded-2xl w-full max-h-48 md:h-52 bg-center' src={recipe_image} alt="Shoes" /></figure>
            <div className="pt-6">
                <h2 className="card-title">{recipe_name}</h2>
                <p className='pt-3 pb-5 border-b-[1px] border-gray-200 text-[#878787]'>{short_description}</p>
                <div className='py-6 border-b-[1px] border-gray-200'>
                    <p className='text-lg font-medium'>Ingredients: {ingredients.length}</p>
                    <ul className='list-disc pl-7 pt-4 text-[#878787]'> 
                        {
                            ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                        }
                    </ul>
                </div>
                <div className='flex justify-start gap-7 py-6'>
                    <p className='flex items-center gap-3'>
                        <span><FaRegClock /></span>
                        {preparing_time} minutes</p>
                    <p className='flex items-center gap-3'>
                        <span><FaFireFlameCurved /></span>
                        {calories} calories</p>
                </div>
                <div className="card-actions justify-start">
                <button className="btn bg-green-400 rounded-[50px] text-lg font-medium px-6">Want to cook</button>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default Recipe;