function getColor( percentage, start, end ) {

    return start.map( (channel, index) => {
        return channel + percentage * ( end[index] - channel );
    })

}
