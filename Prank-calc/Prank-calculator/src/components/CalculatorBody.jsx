import React from 'react'

const CalculatorBody = ({calculation}) => {


  const handleOnClick = (e)=>{
    calculation(e.target.innerHTML)
  }

  return (
    <>
    <div className="btn btn-ac" onClick={handleOnClick}>AC</div>

    <div className="btn btn-c" onClick={handleOnClick}>C</div> 
    <div className="btn btn-per" onClick={handleOnClick}>%</div>
    <div className="btn btn-divide" onClick={handleOnClick}>/</div>
    <div className="btn btn-7" onClick={handleOnClick}>7</div>
    <div className="btn btn-8" onClick={handleOnClick}>8</div>
    <div className="btn btn-9" onClick={handleOnClick}>9</div>
    <div className="btn btn-x" onClick={handleOnClick}>*</div>
    <div className="btn btn-4" onClick={handleOnClick}>4</div>
    <div className="btn btn-5" onClick={handleOnClick}>5</div>
    <div className="btn btn-6" onClick={handleOnClick}>6</div>
    <div className="btn btn-minus" onClick={handleOnClick}>-</div>
    <div className="btn btn-1" onClick={handleOnClick}>1</div>
    <div className="btn btn-2" onClick={handleOnClick}>2</div>
    <div className="btn btn-3" onClick={handleOnClick}>3</div>
    <div className="btn btn-plus" onClick={handleOnClick}>+</div>
    <div className="btn btn-0" onClick={handleOnClick}>0</div>
    <div className="btn btn-dot" onClick={handleOnClick}>.</div>
    <div className="btn btn-equal" onClick={handleOnClick}>=</div>
    </>
  )
}

export default CalculatorBody;