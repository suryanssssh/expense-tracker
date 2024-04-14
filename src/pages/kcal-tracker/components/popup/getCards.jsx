const getCards = () => {

    return (
        kcalDb.map((element) => {
            const { foodName, kcal, protein, carbs, fibers, fat, kcalDate, quantity } = element
            //state to use this everywhere
            // const { currentDate, setCurrentDate } = useContext(FoodContext)

            const date = new Date();

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            // This arrangement can be altered based on how we want the date's format to appear.
            setCurrentDate(`${month}/${day}/${year}`)
            console.log('when this is running')
            if (currentDate == kcalDate) {
                totalkcal = totalkcal + Number(kcal);
                totalProtein = totalProtein + Number(protein)
                totalCarbs = totalCarbs + Number(carbs)
                totalFibers = totalFibers + Number(fibers)

                console.log(`this is the total kcal of today: ${totalkcal}`)
                return (
                    <div className='card'>
                        {/* <FoodImage foodName={foodName} /> */}
                        {/* <img src='https://lh3.googleusercontent.com/a/ACg8ocKotQBTCRIQPRY8O2np_z9rc-pYj1ha7Uea8rWxFlZ2Kmk=s96-c' /> */}
                        <div className="card-content">
                            <h3>{foodName}</h3>
                            <p>KCAL : {kcal}</p>
                            <p>Protein : {protein}</p>
                            <p>Carbohydrates : {carbs}</p>
                            <p>Quantity : {quantity}</p>

                        </div>
                    </div>
                )
            }
        }
        )
    )
}
