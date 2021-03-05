import Container from './container'
import Link from 'next/link'

export default function Alert({ preview }) {
  return (
    <div className="w-full bg-blue-100 "> 
      <Container>
      <Link href="/"><a className="hover:underline">
        <h1 className="py-2 text-2xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
        So4
      </h1></a></Link>
   
      </Container>
      </div>
  )
}
