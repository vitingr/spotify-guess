import { Container } from '@/src/components/toolkit/Container'
import { FEATURES_DATA, FEATURES_ICONS } from './data'
import { Feature } from './types'

export const Features: React.FC = () => {
  return (
    <Container
      as="section"
      data-cid="home-features"
      wrapperClassName="w-full"
      className=" lg:px-12 px-4 lg:pb-36 flex flex-col items-center gap-6 lg:gap-12 relative"
    >
      <div id="como-jogar" className="absolute" />
      <h2 className="text-center text-2xl lg:text-3xl font-semibold">
        Como jogar
      </h2>
      <ul className="w-full flex justify-center self-stretch h-auto items-center">
        {FEATURES_DATA.map((feature: Feature, index: number) => (
          <li
            className="w-full max-w-xs flex flex-col items-center h-full gap-4"
            key={`${feature.title}-${index}`}
          >
            <figure>{FEATURES_ICONS[feature.icon]}</figure>
            <article className="flex flex-col items-center gap-2">
              <p className="text-center font-semibold text-sm lg:text-base">
                {feature.title}
              </p>
              <h3 className="text-center text-xs lg:text-sm">
                {feature.content}
              </h3>
            </article>
          </li>
        ))}
      </ul>
    </Container>
  )
}
