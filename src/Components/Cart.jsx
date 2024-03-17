import PropTypes from 'prop-types';
import CartList from './CartList';
import CookingList from './CookingList';

const Cart = ({cookCart, addToCurrentlyCooking, cooking, currentCookCount, wantToCookCount, totalTime, totalCalory}) => {
    

    return (
        <div className="md:w-2/5 h-full shadow-lg border-[1px] rounded-2xl">
            <div>
                <h1 className="py-4 md:py-8 md:mx-20 md:pb-4 border-b-[1px] border-gray-200 text-2xl font-semibold">Want to cook: {wantToCookCount}</h1>

                <div className="overflow-x-auto">
                    <table className="table table-zebra text-center">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                            {
                                cookCart.map((cart, idx) => <CartList 
                                key={idx}
                                cart={cart}
                                idx={idx}
                                addToCurrentlyCooking={addToCurrentlyCooking}
                                ></CartList>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h1 className="py-4 md:py-8 md:mx-20 md:pb-4 border-b-[1px] border-gray-200 text-2xl font-semibold">Currently Cooking: {currentCookCount}</h1>

                <div className="overflow-x-auto">
                    <table className="table table-zebra text-center">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                            {
                                cooking.map((cook, idx) => <CookingList 
                                key={idx}
                                cook={cook}
                                idx={idx}
                                ></CookingList>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex flex-col text-end gap-6 p-8 text-base font-medium'>
                <p>Total Time = {totalTime} minutes</p>
                <p>Total Calories = {totalCalory} Calories</p>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cookCart: PropTypes.object.isRequired,
    cooking: PropTypes.object.isRequired,
    addToCurrentlyCooking: PropTypes.func,
    currentCookCount: PropTypes.object.isRequired,
    wantToCookCount: PropTypes.object.isRequired,
    totalTime: PropTypes.object.isRequired,
    totalCalory: PropTypes.object.isRequired,
}

export default Cart;