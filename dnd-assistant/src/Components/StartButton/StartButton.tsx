import './StartButton.css'


function EmbarkButton(){
    alert('Not ready yet')
}

function StartButton() {
    return (
        <button onClick={EmbarkButton}>Embark</button>
    )
}

export default StartButton