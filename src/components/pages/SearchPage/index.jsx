import React from 'react'
import { Field, Form } from 'react-final-form'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import { palette } from '../../../constants/theme'
import Heading from '../../atoms/Heading'
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button'
import Paragraph from '../../atoms/Paragraph'
import Main from '../../templates/Main'
import { isRequired, composeValidators, minLength1, maxLength5 } from '../../../services/validator/fieldLevel'
import FinalField from '../../../components/molecules/FinalField'
import { destinations } from '../../../api/responses'
import { StyledContent, StyledForm, StyledColumn } from './styled'

const SearchPage = () => {
  const destinationOpts = destinations.map((d) => ({ label: d.name, value: d.id }))
  const handleSubmit = (params) => console.log('submit', params)

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
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <div>
                <StyledForm onSubmit={handleSubmit} id='form'>
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
                  <Button form="form" kind='primary' type='submit'>SEARCH</Button>
                </Box>
              </div>
            )}
          />

          <Box display='flex'>
            <Paragraph weight={900}>Traver with &nbsp;</Paragraph>
            <Paragraph weight={900} color={palette.pink[0]}>TRAVOLTA</Paragraph>
          </Box>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
        </StyledContent>

      </Container>
    </Main>
  )
}

export default SearchPage
