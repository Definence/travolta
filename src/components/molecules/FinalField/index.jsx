import React from 'react'
import PropTypes from 'prop-types'

import Field from '../Field'

const FinalField = ({ meta, input, ...props }) => {
  const fieldProps = {
    ...props,
    ...input,
    invalid: meta.touched && !!meta.error,
    syncError: meta.error
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
