function getColor( percentage, start, end ) {

    return 'rgb(' + start.map( (channel, index) => {
        return channel + percentage * ( end[index] - channel );
    }).join(',') + ')';

}
