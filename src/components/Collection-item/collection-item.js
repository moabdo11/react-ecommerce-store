import React from 'react';
import  { connect } from 'react-redux';



import SingleButton from '../UI/Buttons/Singlebutton';
import  { addItem } from '../../redux/Cart/cart.actions';

import './collection-item.styles.scss';


const CollectionItem = ({ item, addItem}) => {
    const { name, price ,imageUrl } = item;

    return (
        <div className='collection-item'>
        <div 
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <SingleButton onClick={() => addItem(item)} inverted>Add to Cart</SingleButton>
    </div>
    )};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);