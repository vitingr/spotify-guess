import { Anchor } from '@/src/components/common/Anchor'
import { Container } from '@/src/components/toolkit/Container'
import Image from 'next/image'

export const Header: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="home-header"
      wrapperClassName="w-full"
      className=" lg:px-12 px-4 lg:py-20 py-12"
    >
      <div className="w-full flex justify-between gap-4">
        <figure className="w-full flex justify-center">
          <Image
            src="/svgs/home_image.svg"
            width={300}
            className="selection:bg-transparent"
            height={300}
            alt="home-header-image"
          />
        </figure>
        <article className="w-full flex flex-col gap-12">
          <h1 className="font-medium text-2xl lg:text-4xl">
            Qual música <br /> tem maior número <br /> de ouvintes?
          </h1>
          <Anchor href="/match" label="Quero jogar!" />
        </article>
      </div>
    </Container>
  )
}
