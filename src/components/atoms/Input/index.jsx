import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import { Autocomplete } from '@material-ui/lab'

const Input = ({ value, type, options, onChange, label, classes, defaultValue, invalid, ...props }) => {
  const inputProps = {
    onChange,
    type,
    classes,
    label,
    error: invalid,
    InputLabelProps: { shrink: true },
    defaultValue
  }

  if (type === 'autocomplete') return (
    <Autocomplete
      options={options}
      onChange={(e, value) => onChange(value)}
      defaultValue={defaultValue}
      getOptionLabel={option => option.label}
      renderInput={params => {
        return <TextField {...params} {...inputProps} label={label} variant='outlined' />
      }}
    />
  )
  return <TextField {...inputProps} variant='outlined' />
}


Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string
    })
  ]),
  type: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired
    }).isRequired
  )
}

export default Input
