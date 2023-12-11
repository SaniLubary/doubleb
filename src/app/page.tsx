import Image from 'next/image'

export default function Page() {
  return (
    <main className="grid grid-cols-12 overflow-hidden">
      <div className="col-span-12 bg-dark text-white grid grid-cols-6 overflow-hidden">
        <div className="flex justify-between flex-row items-center my-6 col-start-2 col-end-6">
          <div>|||</div>
          <h1>doubleb</h1>
          <div>cart</div>
        </div>

        <div className="row-start-2 col-start-2 col-end-4">
          <h1 className='text-6xl break-words font-bold'>REDEFINIMOS LA MODA</h1>
          <h3>Double B llega para redefinir la moda con remeras básicas y talles inclusivos</h3>
        </div>
        <div className="row-start-2 col-start-4 col-end-6 overflow-hidden">
          <Image className='absolute' src={'/assets/hero-bg-dude.png'} width={400} height={600} priority alt='Black dude wearing store tshirt' />
        </div>
      </div>
      <div className="col-span-12 bg-grey h-11">
      </div>
    </main>
  )
}
