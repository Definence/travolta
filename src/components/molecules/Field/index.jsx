import React from 'react'
import PropTypes from 'prop-types'
import capitalize from 'lodash.capitalize'
import last from 'lodash.last'

import { Error } from './styled'
import Input from '../../atoms/Input'

const Field = ({
  serverErrors, syncError, name, label, type, placeholder, ...props
}) => {
  const inputProps = {
    id: name,
    name,
    type,
    label,
    placeholder,
    'aria-describedby': `${name}Error`,
    ...props,
    ...serverErrors && { invalid: true }
  }

  const buildError = () => {
    return (
      inputProps.invalid && (
        <Error id={`${name}Error`} mt='-1rem' palette='danger' role='alert'>
          {capitalize(Array.isArray(serverErrors) ? last(serverErrors) : serverErrors) ||
          syncError}
        </Error>
      )
    )
  }

  return (
    <div>
      <Input {...inputProps} />
      {buildError()}
    </div>
  )
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  syncError: PropTypes.string,
  invalid: PropTypes.bool,
  serverErrors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string.isRequired)
  ]),
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
}

Field.defaultProps = {
  type: 'text'
}

export default Field
