import PropTypes from 'prop-types'

const Recipe = ({recipe}) => {
    console.log(recipe);
    const {recipe_name, short_description, recipe_image, praparing_time, ingredients, recipe_id, calories} = recipe;
    return (
        <div className="card max-w-96 bg-base-100 shadow-xl p-5">
            <figure><img className='rounded-2xl' src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="pt-6">
                <h2 className="card-title">{recipe_name}</h2>
                <p>{short_description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default Recipe;