import Container from '@material-ui/core/Container'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductsList from '../../components/Products/ProductsList'
import CartPage from '../../pages/CartPage/CartPage'
import PaymentPage from '../../pages/Payment/PaymentPage'
import ShipingPage from '../../pages/Shiping/ShipingPage'

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    return (
        <Container>
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => (
                        <ProductsList addProductToCart={addProductToCart} />
                    )}
                />

                <Route
                    path="/cart"
                    render={() => (
                        <CartPage
                            productsInCart={productsInCart}
                            removeProductFromCart={removeProductFromCart}
                            changeProductQuantity={changeProductQuantity}
                        />
                    )}
                />
                <Route path="/payment" component={PaymentPage} />
                <Route path="/shiping" component={ShipingPage} />
            </Switch>
        </Container>
    )
}

export default Main
