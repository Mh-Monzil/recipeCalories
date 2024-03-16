import PropTypes from 'prop-types'

const CartList = ({cart,idx, addToCurrentlyCooking}) => {
    const {recipe_name, preparing_time, calories} = cart;
    return (
        <>
        <tr>
                <th>{idx + 1}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td >
                    <button onClick={() => addToCurrentlyCooking(cart)} className="bg-green-400 text-base  font-semibold rounded-[50px] px-4 py-2">Preparing</button>
                </td>
            </tr>
        </>
    );
};

CartList.propTypes = {
    cart: PropTypes.object.isRequired,
    idx: PropTypes.object.isRequired,
    addToCurrentlyCooking: PropTypes.func
}


export default CartList;