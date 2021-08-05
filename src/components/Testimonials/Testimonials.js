/* eslint-disable no-unused-vars */
import { TextField, Button, Card, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles({
    cardWrap: {
        margin: '20px  0',
        padding: 20,
    },
    inputField: {
        marginBottom: 20,
    },
})

const Testimonials = () => {
    const classes = useStyles()

    const arrTestimonials = [
        {
            name: 'Вадим Билда',
            text: 'телефон - бомба!Я в первую очередь из-за камеры куплю его как только цена станет адекватнее',
        },
        {
            name: 'Frenk Big',
            text: 'Всё классно, всё ожидаемо, пользуюсь с удовольствием',
        },
    ]

    const [testimonials, setTestimonials] = useState(arrTestimonials)

    const [newTestimonials, setNewTestimonials] = useState({
        name: '',
        text: '',
    })

    const handleNameChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            name: e.target.value,
        }))
    }

    const handleTextChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            text: e.target.value,
        }))
    }

    const onSend = (e) => {
        e.preventDefault()
        setNewTestimonials({
            name: '',
            text: '',
        })
        setTestimonials((value) => {
            return [...value, newTestimonials]
        })
    }

    return (
        <>
            <h1> Testimonials </h1>

            {testimonials.map(({ name, text }, i) => (
                <Card key={i} className={classes.cardWrap}>
                    <h3>{name}</h3>
                    <p>{text}</p>
                </Card>
            ))}

            <form onSubmit={onSend}>
                <div>
                    <TextField
                        label="Your name"
                        variant="outlined"
                        className={classes.inputField}
                        value={newTestimonials.name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Your text"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={newTestimonials.text}
                        onChange={handleTextChange}
                        className={classes.inputField}
                    />
                </div>
                <Button
                    variant="outlined"
                    className={classes.inputField}
                    type="submit"
                >
                    Leave a comment
                </Button>
            </form>
        </>
    )
}

export default Testimonials
