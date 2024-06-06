import { Metadata } from 'next'
import { OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types'

interface GetMataDataProps {
  type?: OpenGraphType
  image: string
  title: string
  description: string
}

export const getMetaData = ({ title, description, image, type = "website" }: GetMataDataProps): Metadata => {
  const images = [image]

  return {
    title,
    description,
    openGraph: {
      type,
      images,
      title,
      description
    }
  }
}
