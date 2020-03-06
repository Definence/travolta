import React from 'react'

import StyledButton from './styled'

const Button = ({ kind, children, ...props }) => {
return <StyledButton kind={kind} {...props}>{children}</StyledButton>
}

export default Button
