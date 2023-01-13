const anims = {
    transition: {duration: 1},
    container: {
        hidden: {opacity: 0, y: 100},
        visible: {
            opacity: 1, 
            y: 0, 
            transition: {
                duration: 1, 
                staggerChildren: .3
            }
        }
    },
    stackFromRight: {
        hidden: {opacity: 0, x: 1000},
        visible: {
            opacity: 1, 
            x: 0, 
            transition: {
                duration: 1, 
                staggerChildren: .5
            }
        }
    },
    stackFromLeft: {
        hidden: {opacity: 0, x: -1000},
        visible: {
            opacity: 1, 
            x: 0, 
            transition: {
                duration: 1, 
                staggerChildren: .5
            }
        }
    },
    item: {
        hidden: {opacity: 0, x: 0, y: 100},
        visible: {
            opacity: 1, 
            y: 0,
            x: 0,
            transition: {
                duration: 1
            }
        }
    },
    itemRight: {
        hidden: {opacity: 0, x: 1000},
        visible: {
            opacity: 1, 
            x: 0,
            transition: {
                duration: 1
            }
        }
    },
    itemLeft: {
        hidden: {opacity: 0, x: -1000},
        visible: {
            opacity: 1, 
            x: 0,
            transition: {
                duration: 1
            }
        }
    },
    
}

export default anims