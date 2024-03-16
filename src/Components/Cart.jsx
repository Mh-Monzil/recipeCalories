import PropTypes from 'prop-types';
import CartList from './CartList';
import CookingList from './CookingList';

const Cart = ({cookCart, addToCurrentlyCooking, cooking}) => {
    

    return (
        <div className="md:w-2/5 shadow-lg border-[1px] rounded-2xl">
            <div>
                <h1 className="md:py-8 md:mx-20 md:pb-4 border-b-[1px] border-gray-200 text-2xl font-semibold">Want to cook: {}</h1>

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
                <h1 className="md:py-8 md:mx-20 md:pb-4 border-b-[1px] border-gray-200 text-2xl font-semibold">Want to cook: {}</h1>

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
        </div>
    );
};

Cart.propTypes = {
    cookCart: PropTypes.object.isRequired,
    cooking: PropTypes.object.isRequired,
    addToCurrentlyCooking: PropTypes.func
}

export default Cart;