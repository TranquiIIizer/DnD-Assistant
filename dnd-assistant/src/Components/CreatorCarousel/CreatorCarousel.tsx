import AbilityScoresPanel from '../AbilityScoresPanel/AbilityScoresPanel'
import styled from 'styled-components'

const Carousel = styled.div({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    '& button': {
        maxWidth: 10,
        backgroundColor: 'brown',
        height: 25,
        textAlign: 'center',
        paddingTop: -10,
    },
    '& input': {
        border: 'none',
        padding: 10
    }
})

const Arrow = styled.span({
    transform: 'scale(-1,1)',
    display: 'inline-block',
})

function CreatorCarousel(){
    return <Carousel>
        <button><Arrow>&#x27A4;</Arrow></button>
        <AbilityScoresPanel/>
        <button>&#x27A4;</button>
    </Carousel>
}

export default CreatorCarousel