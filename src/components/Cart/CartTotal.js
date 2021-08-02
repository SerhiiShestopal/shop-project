import React from 'react'
import { keys } from 'lodash'
import productsArray from '../Products/productsArray'

const productsObj = productsArray.reduce(
    (object, product) => ({
        ...object,
        [product.id]: product,
    }),
    {}
)

const CartTotal = ({ productsInCart }) => {
    return (
        <div>
            Total:
            {keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsInCart[productId] * productsObj[productId].price,
                0
            )}
            $
        </div>
    )
}

export default CartTotal
