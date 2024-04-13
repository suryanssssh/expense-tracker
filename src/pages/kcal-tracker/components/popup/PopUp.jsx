import React, { useState } from 'react'
import Modal from './Modal'

const BUTTON_WRAPPER_STYLES = {
    position: 'relative',

}

export default function Popup({ item }) {
    const [isOpen, setIsOpen] = useState(false)
    const { foodName, kcal, protein, carbs, fibers, fat, kcalDate } = item
    return (
        <>
            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
                <h5 onClick={() => setIsOpen(true)}>{foodName}</h5>

                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <div className='details'>
                        <h3>The nutrition value of {foodName} is</h3>
                        <p>kcal:{kcal}</p>
                        <p>protein:{protein}</p>
                        <p>carbs:{carbs}</p>
                        <p>fat:{fat}</p>
                        <p>fibers:{fibers}</p>
                    </div>
                    <div className='quantity'>
                        <form >
                            <h2>1=100 gram/100 ml/1 quantity(like egg)</h2>
                            <input type="number" />
                        </form>
                    </div>
                </Modal>
            </div>

        </>
    )
}