import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  return (
    <Container>
      <div className='header'>
        <img src={Logo} alt='logo explorer' />
        <h1>food explorer</h1>
      </div>

      <Form>
        <h1>Login</h1>

        <label htmlFor='email'>Email</label>
        <Input placeholder='Example: example@example.com' />

        <label htmlFor='password'>Password</label>
        <Input placeholder='minimum 6 characters' />

        <Button title='Enter' />

        <Link to='/register'>Create account</Link>
      </Form>
    </Container>
  )
}
