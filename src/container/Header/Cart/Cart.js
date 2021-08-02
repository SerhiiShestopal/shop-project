import React from 'react'
import { keys } from 'lodash'
import productsArray, {
    getProductsObj,
} from '../../../components/Products/productsArray'
import CartTotal from '../../../components/Cart/CartTotal'
import { Grid } from '@material-ui/core'

const Cart = ({
    productsInCart,
    productsObj = getProductsObj(productsArray),
}) => {
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
