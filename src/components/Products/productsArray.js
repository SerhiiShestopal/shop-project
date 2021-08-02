const productsArray = [
    {
        id: 1,
        name: 'iPhone 11',
        description: 'This is iPhone 12',
        type: 'phone',
        color: 'gold',
        price: 1500,
        image: '/images/iphone_red.png',
    },
    {
        id: 2,
        name: 'iPhone 12',
        description: 'This is iPhone 12',
        type: 'phone',
        color: 'gold',
        price: 2000,
        image: '/images/iphone_white.jpeg',
    },
    {
        id: 3,
        name: 'iPhone 8',
        description: 'This is iPhone 12',
        type: 'phone',
        color: 'gold',
        price: 500,
        image: '/images/iphone_black.png',
    },
    {
        id: 4,
        name: 'iPhone 11',
        description: 'This is iPhone 12',
        type: 'phone',
        color: 'gold',
        price: 1500,
        image: '/images/iphone_red.png',
    },
    {
        id: 5,
        name: 'iPhone 12',
        description: 'This is iPhone 12',
        type: 'phone',
        color: 'gold',
        price: 2000,
        image: '/images/iphone_white.png',
    },
    {
        id: 6,
        name: 'iPhone 8',
        description: 'This is iPhone 12',
        type: 'phone',
        color: 'gold',
        price: 500,
        image: '/images/iphone_black.png',
    },
]

export const getProductsObj = (array) => {
    return array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )
}

export default productsArray
