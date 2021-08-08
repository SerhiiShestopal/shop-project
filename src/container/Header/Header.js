import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Menu from './Menu/Menu'
import Cart from './Cart/Cart'
import Favorites from './Favorites/Favorites'

const useStyles = makeStyles(() => ({
    menuButton: {
        marginRight: 5,
    },
    title: {
        flexGrow: 1,
    },
}))

const Header = ({ productsInCart, likeButtonsState }) => {
    const classes = useStyles()

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Fake shop
                    </Typography>
                    <Menu />
                    <Favorites likeButtonsState={likeButtonsState} />
                    <Cart productsInCart={productsInCart} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

Header.propTypes = {
    cartData: PropTypes.object,
}

export default Header
