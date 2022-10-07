import React from "react"

export default function FormSelectFile() {
    const inputFile = React.useRef()
    const selectMaxNumFiles = React.useRef()
    const selectMaxSize = React.useRef() 

    let maxNumFiles = [1,2,3,4]
    let maxFileSizes = [50,100,200,500,1000]

    const onClickButton = () => {
        let maxNumFiles = selectMaxNumFiles.current.value
        let maxSize = selectMaxSize.current.value

        if(inputFile.current.maxFileSizes)
    }
}