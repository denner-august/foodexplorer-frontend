import { Container } from './styles'

import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { Footer } from '../../components/Footer'
import { Carousel } from '../../components/Carousel'

export function Home() {
  const isEdit = false

  return (
    <Container>
      <Header />

      <main>
        <Hero className='front-cover' />
        <div className='carousels'>
          <Carousel isEdit={isEdit} />
        </div>

        <Footer />
      </main>
    </Container>
  )
}
