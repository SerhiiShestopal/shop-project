import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import './ProductListItem.css'
import Quantity from '../Quantity/Quantity'

const ProductListItem = ({
    id,
    name,
    description,
    type,
    color,
    price,
    image,
    addProductToCart,
}) => {
    const [count, setCount] = useState(1)

    const onIncrementClick = () => {
        setCount(count + 1)
    }

    const onDecrementClick = () => {
        setCount(count - 1)
    }

    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={image} />
                </div>
                <h4>{name}</h4>
                <p>{description}</p>
                <div>Type: {type}</div>
                <div>Color: {color}</div>
                <div className="product-price">{price}$</div>
                <Quantity
                    count={count}
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                />
            </CardContent>
            <CardActions className="btn-wrap">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}

ProductListItem.defaultProps = {
    description: 'No description ...',
}
export default ProductListItem
