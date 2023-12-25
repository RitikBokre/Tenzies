import React from 'react'
import data from '/data'
import Dice from '/Dice'
import Confetti from 'react-confetti'

export default function App() {
    function getRandomNo() {
        return Math.ceil(Math.random() * 6)
    }

    function getRandomArray() { return data.map(item => ({ ...item, num: getRandomNo() })) }
    const [dices, setDices] = React.useState(getRandomArray())
    const [tenzies, setTenzies] = React.useState(false)


    React.useEffect(() => {
        const firstValue = dices[0].num;
        const isTenzies = dices.every(item => item.num == firstValue) &&
            dices.every(item => item.hold == true)
        if (isTenzies) {
            setTenzies(true);
            console.log("won");
            setDices(getRandomArray())
        }
    }, [dices])

    const dicesArr = dices.map(item =>
        <Dice key={item.id} hold={item.hold} id={item.id} num={item.num}
            handleClick={() => handleClick(item.id)} />)

    function handleClick(idx) {
        setDices(prev => {
            return prev.map(item => item.id === idx ? { ...item, hold: !item.hold } : item)
        })
    }

    function handleRoll() {
        if (!tenzies) {
            setDices(prev => {
                return prev.map(item => item.hold ? item : { ...item, num: getRandomNo() })
            })
        }
        else {
            setTenzies(false);
            setDices(dataWithRandom);
        }
    }


    return (
        <main>
            {tenzies && <Confetti />}
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='dice-wrapper'>
                {dicesArr}
            </div>
            <button className="btn" onClick={handleRoll}>{tenzies ? 'New Game' : 'Roll'}</button>
        </main>
    )
}