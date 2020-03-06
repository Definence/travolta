import React from 'react'
import PropTypes from 'prop-types'

import Field from '../Field'

const FinalField = ({ meta, input, ...props }) => {
  const fieldProps = {
    ...props,
    ...input,
    invalid: meta.touched && !!meta.error,
    syncError: meta.error,
    ...props.type === 'select' && {
      onBlur: () => {
        const value = Array.isArray(input.value) && (input.value.length === 0) ? '' : undefined
        return input.onBlur(value)
      }

    }
  }

  return <Field {...fieldProps} />
}

FinalField.propTypes = {
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  }).isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default FinalField
