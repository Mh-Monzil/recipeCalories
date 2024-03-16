import PropTypes from 'prop-types'

const CookingList = ({cook,idx}) => {
    const {recipe_name, preparing_time, calories} = cook;
    

    return (
    <>
        <tr>
                <th>{idx + 1}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
        </tr>
        
    </>
    );
};

CookingList.propTypes = {
    cook : PropTypes.object.isRequired,
    idx : PropTypes.object.isRequired,
}

export default CookingList;