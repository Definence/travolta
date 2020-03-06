export const composeValidators = (...validators) => value =>
validators.reduce((error, validator) => error || validator(value), undefined)


export const isRequired = value => {
  return value ? undefined : 'Required'
}

export const minLength1 = value => {
  return value < 1 ? 'Minimum is 1' : undefined
}

export const maxLength5 = value => {
  return value > 5 ? 'Maximum is 5' : undefined
}
