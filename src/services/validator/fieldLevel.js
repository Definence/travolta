export const composeValidators = (...validators) => value =>
validators.reduce((error, validator) => error || validator(value), undefined)


export const isRequired = value => (
  value ? undefined : 'Required'
)

export const minLength1 = value => (
  (typeof value === 'number' && value < 1)  ? undefined : 'Minimum is 1'
)

export const maxLength5 = value => (
  (typeof value === 'number' && value > 5)  ? undefined : 'Maximum is 5'
)
