import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import ProductListItem from './ProductListItem'
import productsArray from './productsArray'

const useStyles = makeStyles({
    title: {
        margin: '30px 0',
    },
})

const ProductsList = ({ addProductToCart }) => {
    const classes = useStyles()
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                align="center"
                className={classes.title}
            >
                Products List
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={3}
            >
                {productsArray.map(
                    ({ id, name, description, type, color, price, image }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                id={id}
                                name={name}
                                description={description}
                                type={type}
                                color={color}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
