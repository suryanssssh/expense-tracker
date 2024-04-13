import React, { useState, useContext } from 'react'
import Modal from './Modal'
import { FoodContext } from '../../../../context/FoodContext'

const BUTTON_WRAPPER_STYLES = {
    position: 'relative',

}

export default function Popup({ item }) {
    const [isOpen, setIsOpen] = useState(false)
    let { foodName, kcal, protein, carbs, fibers, fat, kcalDate } = item

    // context for Add handler 
    let {
        quantity,
        setFoodName,
        setKcal,
        setProtein,
        setCarbs,
        setFibers,
        setFat,
        setQuantity,

    } = useContext(FoodContext)

    //this function is to update the state of add button 
    const AutoFillHandler = (e) => {
        e.preventDefault()
        setFoodName(item.foodName * quantity)
        setKcal(item.kcal * quantity)
        setProtein(item.protein * quantity)
        setCarbs(item.carbs * quantity)
        setFibers(item.fibers * quantity)
        setFat(item.fat * quantity)
        setQuantity(quantity)
        console.log(item.kcalDate)


    }

    return (
        <>
            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
                <h5 onClick={() => setIsOpen(true)}>{foodName}</h5>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <div className='details'>
                        <h3>The nutrition value of {foodName} ( per quantity : {item.quantity} ) is</h3>
                        <p>kcal:{kcal}</p>
                        <p>protein:{protein}</p>
                        <p>carbs:{carbs}</p>
                        <p>fat:{fat}</p>
                        <p>fibers:{fibers}</p>
                    </div>
                    <div className='quantity'>
                        <form >
                            <h2>1=100 gram/100 ml/1 quantity(like egg)</h2>
                            <input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                            <button onClick={AutoFillHandler}>add</button>
                        </form>
                    </div>
                </Modal>
            </div>

        </>
    )
}