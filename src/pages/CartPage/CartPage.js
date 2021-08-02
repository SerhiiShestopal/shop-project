import React from 'react'
import { keys } from 'lodash'
import productsArray, {
    getProductsObj,
} from '../../components/Products/productsArray'
import { Button, Card, CardContent, Grid, makeStyles } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import CartTotal from '../../components/Cart/CartTotal'
import Quantity from '../../components/Quantity/Quantity'

const useStyles = makeStyles({
    media: {
        width: 100,
        height: 'auto',
        marginRight: 20,
    },
    cardWrap: {
        display: 'flex',
        padding: 15,
    },
})

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    productsObj = getProductsObj(productsArray),
}) => {
    const classes = useStyles()
    return (
        <>
            <h1>Cart Page</h1>
            <Grid container spacing={3}>
                {keys(productsInCart).map((id) => (
                    <Grid item xs={12} sm={6} key={id}>
                        <Card className={classes.cardWrap}>
                            <div>
                                <img
                                    src={productsObj[id].image}
                                    className={classes.media}
                                />
                            </div>
                            <CardContent>
                                <div>{productsObj[id].name}</div>
                                <p>
                                    Price for one items: {productsObj[id].price}
                                </p>
                                <p>Count: {productsInCart[id]}</p>
                                <Quantity count={productsInCart[id]} />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{
                                        marginTop: 20,
                                    }}
                                >
                                    <DeleteIcon
                                        onClick={() =>
                                            removeProductFromCart(id)
                                        }
                                    />
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}

export default CartPage
