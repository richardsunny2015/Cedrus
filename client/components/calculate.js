import React from 'react'
import CalculateForm from './calculateForm'
import Values from './values'

// Main calculator component
const Calculate = props => {
    return (
        <div>
            <CalculateForm />
            <Values />
        </div>
    )
}

export default Calculate
