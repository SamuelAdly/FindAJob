import React, {useEffect} from 'react'


const Stepper = ({steps, currentStep}) => {

    //whenever steps and/or current step changes, useEffect will run

    useEffect(()=> {
        const stepsState = steps.map((step, index) => 
            Object.assign({}, {
                description: step,
                completed: false,
                highlighted: index === 0 ? true : false,
                selected: index === 0 ? true: false,
            })
        );

    }, [steps, currentStep]);
    

    const displaySteps=(
        <div className="w-full flex items-center">
            <div className="relative flex flex-col items-center text-teal-600">
                {/*Display number*/}
                <div className="rounded-full transition duration-500 ease-in-out border-2   border-gray-300 h-12 w-12 flex items-center justify-center py-3" >1</div>
                <div className="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ">{/* Display description*/}
                    Description
                </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out">
                {/* Display line*/}
            </div>        
        </div>
    );
  return (
    <div className="mx-4 p-4 flex justify-between items-center">
        {displaySteps}
    </div>

  )
}

export default Stepper