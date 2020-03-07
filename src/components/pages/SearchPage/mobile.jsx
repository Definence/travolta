import React from 'react'
import { Field, Form as FinalForm } from 'react-final-form'
import Box from '@material-ui/core/Box'

import Button from '../../atoms/Button'
import Form from '../../atoms/Form'
import { isRequired, composeValidators, minLength1, maxLength5 } from '../../../services/validator/fieldLevel'
import FinalField from '../../../components/molecules/FinalField'

const Mobile = ({ handleSubmit, destinationOpts, initialValues }) => {
  return (
    <FinalForm
      onSubmit={handleSubmit}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} id='form'>
          <Field fullWidth validate={isRequired} component={FinalField} options={destinationOpts} type='autocomplete' name='destination' label='Destination' />
          <Field fullWidth validate={isRequired} component={FinalField} label='Check in' name='check_in' type='date' />
          <Field fullWidth validate={isRequired} component={FinalField} label='Check out' name='check_out' type='date' />

          <Field fullWidth validate={composeValidators(isRequired, minLength1, maxLength5)} component={FinalField} label='Adults' name='adults' type='number' />
          <Field fullWidth validate={composeValidators(isRequired, minLength1, maxLength5)} component={FinalField} label='Children' name='children' type='number' />
          <Box display='flex' justifyContent='center'>
            <Button form="form" kind='primary' type='submit'>SEARCH</Button>
          </Box>
        </Form>
      )}
    />
  )
}

export default Mobile
