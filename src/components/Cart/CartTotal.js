import React from 'react'
import { keys } from 'lodash'
import productsArray, { getProductsObj } from '../Products/productsArray'

const CartTotal = ({
    productsInCart,
    productsObj = getProductsObj(productsArray),
}) => {
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
