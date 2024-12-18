function AbilityScoresPanel(){
    return <>
    <div>
        <input type="number" max={15} min={8} placeholder="Strength"/>
        <input type="number" max={15} min={8} placeholder="Dexterity"/>
        <input type="number" max={15} min={8} placeholder="Constitution"/>
        <input type="number" max={15} min={8} placeholder="Inteligence"/>
        <input type="number" max={15} min={8} placeholder="Wisdom"/>
        <input type="number" max={15} min={8} placeholder="Charisma"/>
    </div>
    </>
}

export default AbilityScoresPanel