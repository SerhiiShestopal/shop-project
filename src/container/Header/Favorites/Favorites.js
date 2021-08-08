import { makeStyles } from '@material-ui/core'
import React from 'react'
import { keys } from 'lodash'

const useStyles = makeStyles({
    menuFavorite: {
        padding: 10,
    },
})

// eslint-disable-next-line no-unused-vars
const Favorite = ({ likeButtonsState }) => {
    const classes = useStyles()

    return (
        <div className={classes.menuFavorite}>
            Favorites:
            {keys(likeButtonsState).reduce(
                (total, id) =>
                    total + +(likeButtonsState[id] === true ? '1' : '0'),
                0
            )}
        </div>
    )
}

export default Favorite
