export const Highlight: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h2 className="lg:my-12 my-8 w-full text-center font-[500] text-2xl lg:text-4xl cursor-default">
          Descubra qual{' '}
          <span className="font-[500] text-transparent text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
            música
          </span>{' '}
          possui o maior <br />
          <span className="font-[500] text-transparent text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
            {' '}
            número de ouvintes
          </span>{' '}
          no spotify
        </h2>
      </div>
    </section>
  )
}
