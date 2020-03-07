import React from 'react'
import { Field, Form } from 'react-final-form'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import { palette } from '../../../constants/theme'
import Button from '../../atoms/Button'
import Paragraph from '../../atoms/Paragraph'
import Main from '../../templates/Main'
import { isRequired, composeValidators, minLength1, maxLength5 } from '../../../services/validator/fieldLevel'
import FinalField from '../../../components/molecules/FinalField'
import { StyledContent, StyledForm, StyledColumn } from './styled'

const SearchPage = ({ handleSubmit, destinationOpts  }) => {
  return (
    <Main>
      <Container maxWidth='sm'>
        <StyledContent>
          <Form
            onSubmit={handleSubmit}
            initialValues={{
              adults: 1,
              check_in: "2020-03-25",
              check_out: "2020-03-25",
              children: 1
            }}
            render={({ handleSubmit }) => (
              <div>
                <StyledForm onSubmit={handleSubmit} id='form'>
                  <StyledColumn>
                    <Field validate={isRequired} component={FinalField} options={destinationOpts} type='autocomplete' name='destination' label='Destination' />
                    <Field validate={isRequired} component={FinalField} label='Check in' name='check_in' type='date' />
                    <Field validate={isRequired} component={FinalField} label='Check out' name='check_out' type='date' />
                  </StyledColumn>

                  <StyledColumn>
                    <Field validate={composeValidators(isRequired, minLength1, maxLength5)} component={FinalField} label='Adults' name='adults' type='number' />
                    <Field validate={composeValidators(isRequired, minLength1, maxLength5)} component={FinalField} label='Children' name='children' type='number' />
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
