import React from 'react'

function Button({onClickHandler, title, className, id}) {
    return (
        <>
            <button onClick={() => onClickHandler(id)} className={className} >
            {title}
            </button>
        </>
    )
}

export default Button
