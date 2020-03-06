import React from 'react'
import { Field, Form } from 'react-final-form'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import { palette } from '../../../constants/theme'
import Heading from '../../atoms/Heading'
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button'
import Main from '../../templates/Main'
import { isRequired, composeValidators, minLength1, maxLength5 } from '../../../services/validator/fieldLevel'
import FinalField from '../../../components/molecules/FinalField'
import { destinations } from '../../../api/responses'
import { StyledContent, StyledForm, StyledColumn } from './styled'

const SearchPage = () => {
  const destinationOpts = destinations.map((d) => ({ label: d.name, value: d.id }))
  const handleSubmit = (params) => console.log(params)

  return (
    <Main>
      <Container maxWidth='sm'>
        <Box display='flex' justifyContent='space-between' width='100%'>
          <Box display='flex' alignItems='center'>
            <Icon icon='circle' fill={palette.pink[0]} />
            <Heading>Travolta</Heading>
          </Box>

          <Box alignItems='center' display='flex'>
            <Button kind='secondary'>About Us</Button>
            <Button kind='secondary'>My bookings</Button>
            <Button kind='secondary'>Sign in</Button>
          </Box>
        </Box>

        <StyledContent>
          <Form
            onSubmit={handleSubmit}
            render={({ handleSubmit }) => (
              <div>
                <StyledForm onSubmit={handleSubmit} id='form1'>
                  <StyledColumn>
                    <Field validate={isRequired} component={FinalField} options={destinationOpts} type='autocomplete' name='destination' label='Destination' />
                    <Field validate={isRequired} component={FinalField} label='Check in' name='check_in' />
                    <Field validate={isRequired} component={FinalField} label='Check out' name='check_out' />
                  </StyledColumn>

                  <StyledColumn>
                    <Field validate={composeValidators(isRequired, minLength1, maxLength5)} component={FinalField} label='Adults' name='adults' type='number' />
                    <Field validate={composeValidators(isRequired, minLength1, maxLength5)} component={FinalField} label='Adults' name='children' type='number' />
                  </StyledColumn>
                </StyledForm>
                <Box display='flex' justifyContent='center'>
                  <Button form="form1" kind='primary' type='submit'>SEARCH</Button>
                </Box>
              </div>
            )}
          />
        </StyledContent>
      </Container>
    </Main>
  )
}

export default SearchPage
