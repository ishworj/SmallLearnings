import { useState } from "react"
import CalculatorBody from "./CalculatorBody"
import Display from "./Display"

const Calculator = () => {
    const [result,setResult]=useState("")
    const specialoperators = ["%","-","+","/","*"]
    const [lastOperator,setLastOperator]=useState("");

    const calculation=(value)=>{
      if (value==="AC") {
        setResult("");
        return 
      }
      if (value==="=") {
        setResult(eval(result).toString())
        return
      }

      if (value==="C") {
        setResult((prev)=>prev.slice(0,-1))
        return 
      }

      if (specialoperators.includes(value)) {
        setLastOperator(value)
        const lastChar = result[result.length - 1]
            if (specialoperators.includes(lastChar)) {
              setResult((prev)=>prev.slice(0,-1))
            }   
      }


      if (value==="." ) {
        const lastOperatorIndex=result.lastIndexOf(lastOperator)|| "";
    
        const lastNumberset=result.slice(lastOperatorIndex);

        console.log(lastNumberset)
    
        if (lastNumberset.includes(".")) {
            return;
            
        }
    
        if(!lastOperator && result.includes(".")){
            return;
        }
    }
      

      setResult((prev)=>prev+value)



    }

  
    return (
      
      <div className="calculator">

      <Display  result={result}/>

      <CalculatorBody  calculation={calculation}/>

    </div>
    )
}

export default Calculator