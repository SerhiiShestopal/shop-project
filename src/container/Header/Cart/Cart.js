import React from 'react'
import { keys } from 'lodash'
import productsArray from '../../../components/Products/productsArray'
import CartTotal from '../../../components/Cart/CartTotal'
import { Grid } from '@material-ui/core'

// eslint-disable-next-line no-unused-vars
const productsObj = productsArray.reduce(
    (object, product) => ({
        ...object,
        [product.id]: product,
    }),
    {}
)

const Cart = ({ productsInCart }) => {
    return (
        <>
            <Grid>
                {keys(productsInCart).map((id) => (
                    <div key={id}>
                        {productsObj[id].name} : {productsInCart[id]}
                    </div>
                ))}
                <CartTotal productsInCart={productsInCart} />
            </Grid>
        </>
    )
}

export default Cart
