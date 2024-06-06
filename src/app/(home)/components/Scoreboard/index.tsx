


import { ScoreboardCard } from '@/src/components/common/Cards/ScoreboardCard'
import { Container } from '@/src/components/toolkit/Container'
import { UserProps } from '@/src/types'

import { useEffect, useState } from 'react'

export const ScoreBoard: React.FC = () => {

  return (
    <Container
      as="section"
      data-cid="home-header"
      wrapperClassName="w-full"
      className=" lg:px-12 px-4 lg:py-20 py-12 flex flex-col items-center gap-6 lg:gap-12"
    >
      <h2 className="text-center text-2xl lg:text-3xl font-semibold">
        Ranking dos usuários
      </h2>
    </Container>
  )
}
