import Image from 'next/image'
import tocina from '../../assets/1682681617567.jpg'

export default function Home() {
  const tocinaMajstorce =
    <div className="flex text-6xl">
      TOCINA!
    </div>
  const numberOfDivs = 100

  return (
    <div className="flex flex-wrap justify-around items-center w-full h-full ">
      <div className="flex flex-nowrap animate-spin h-12">
        {
          Array.from({ length: 10 }, (_, index) => (
            <div className="flex text-6xl" key={index}>
              TOCINA!
              {/* {index + 1} */}
            </div>
          ))
        }
      </div>

      <div className="flex flex-nowrap animate-spin`">
        {
          Array.from({ length: 5 }, (_, index) => (
            <div className="w-screen h-14 ml-12"  key={index}>
              <div className="text-9xl">
                LOLCINA!
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-nowrap animate-spin`">
        {
          Array.from({ length: 5 }, (_, index) => (
            <div className="w-screen h-14 ml-12"  key={index}>
              <div className="text-9xl">
                LOLCINA!
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-nowrap animate-spin`">
        {
          Array.from({ length: 5 }, (_, index) => (
            <div className="w-screen h-14 ml-12"  key={index}>
              <div className="text-9xl">
                LOLCINA!
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-nowrap animate-spin`">
        {
          Array.from({ length: 5 }, (_, index) => (
            <div className="w-screen h-14 ml-12"  key={index}>
              <div className="text-9xl">
                LOLCINA!
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-nowrap animate-spin`">
        {
          Array.from({ length: 5 }, (_, index) => (
            <div className="w-screen h-14 ml-12"  key={index}>
              <div className="text-9xl">
                LOLCINA!
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-nowrap animate-spin`">
        {
          Array.from({ length: 5 }, (_, index) => (
            <div className="w-screen h-14 ml-12"  key={index}>
              <div className="text-9xl">
                LOLCINA!
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-nowrap animate-spin`">
        {
          Array.from({ length: 5 }, (_, index) => (
            <div className="w-screen h-14 ml-12"  key={index}>
              <div className="text-9xl">
                LOLCINA!
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-nowrap animate-spin`">
        {
          Array.from({ length: 5 }, (_, index) => (
            <div className="w-screen h-14 ml-12"  key={index}>
              <div className="text-9xl">
                LOLCINA!
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-nowrap animate-spin`">
        {
          Array.from({ length: 5 }, (_, index) => (
            <div className="w-screen h-14 ml-12"  key={index}>
              <div className="text-9xl">
                LOLCINA!
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-nowrap animate-spin`">
        {
          Array.from({ length: 5 }, (_, index) => (
            <div className="w-screen h-14 ml-12"  key={index}>
              <div className="text-9xl">
                LOLCINA!
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-nowrap animate-spin`">
        {
          Array.from({ length: 5 }, (_, index) => (
            <div className="w-screen h-14 ml-12"  key={index}>
              <div className="text-9xl">
                LOLCINA!
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-nowrap animate-spin`">
        {
          Array.from({ length: 5 }, (_, index) => (
            <div className="w-screen h-14 ml-12"  key={index}>
              <div className="text-9xl">
                LOLCINA!
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-nowrap animate-spin`">
        {
          Array.from({ length: 5 }, (_, index) => (
            <div className="w-screen h-10" key={index}>
              <div className="text-9xl">
                LOLCINA!
              </div>
            </div>
          ))
        }
      </div>

      <div className="w-screen h-3/6">
        <div className="text-9xl">
          LOLCINA!
        </div>
      </div>

    <div className="absolute top-2 left-10 flex flex-wrap flex-col gap-4 animate-pulse">

      {
        Array.from({ length: 10 }, (_, index) => (
          <div className="flex-2 w-48 h-60" key={index}>
            <Image src={tocina} alt='tocina' />
          </div>
        ))
      }
      </div>
    <div className="absolute top-2 left-14 flex flex-wrap flex-col gap-4 animate-bounce">

      {
        Array.from({ length: 10 }, (_, index) => (
          <div className="flex-2 w-48 h-60" key={index}>
            <Image src={tocina} alt='tocina' />
          </div>
        ))
      }
      </div>

    <div className="absolute top-2 left-24 flex flex-wrap flex-col gap-4 animate-spin">

      {
        Array.from({ length: 10 }, (_, index) => (
          <div className="flex-2 w-48 h-60" key={index}>
            <Image src={tocina} alt='tocina' />
          </div>
        ))
      }
      </div>

    <div className="absolute top-2 left-32 flex flex-wrap flex-col gap-4 animate-pulse">

      {
        Array.from({ length: 10 }, (_, index) => (
          <div className="flex-2 w-48 h-60" key={index}>
            <Image src={tocina} alt='tocina' />
          </div>
        ))
      }
      </div>

    <div className="absolute top-2 right-44 flex flex-wrap flex-col gap-4 animate-bounce">

      {
        Array.from({ length: 10 }, (_, index) => (
          <div className="flex-2 w-48 h-60" key={index}>
            <Image src={tocina} alt='tocina' />
          </div>
        ))
      }
      </div>
    <div className="absolute top-2 right-22 flex flex-wrap flex-col gap-4 animate-ping">

      {
        Array.from({ length: 10 }, (_, index) => (
          <div className="flex-2 w-48 h-60" key={index}>
            <Image src={tocina} alt='tocina' />
          </div>
        ))
      }
      </div>
    <div className="absolute top-2 right-8 flex flex-wrap flex-col gap-4 animate-spin">

      {
        Array.from({ length: 10 }, (_, index) => (
          <div className="flex-2 w-48 h-60" key={index}>
            <Image src={tocina} alt='tocina' />
          </div>
        ))
      }
      </div>



    <div className="absolute top-2 right-28 flex flex-wrap flex-col gap-4 animate-ping">

      {
        Array.from({ length: 10 }, (_, index) => (
          <div className="flex-2 w-48 h-60" key={index}>
            <Image src={tocina} alt='tocina' />
          </div>
        ))
      }
      </div>
      <div className='w-full h-full absolute left-12 top-12 opacity-30'>

          <div className="w-full h-full" >
            <Image src={tocina} alt='tocina' />
          </div>
      </div>
      <div className='w-full h-full absolute left-0 top-12 opacity-30 animate-spin'>

          <div className="w-full h-full" >
            <Image src={tocina} alt='tocina' />
          </div>
      </div>
      <div className='w-full h-full absolute right-24 ring opacity-30 animate-bounce'>

          <div className="w-full h-full" >
            <Image src={tocina} alt='tocina' />
          </div>
      </div>
      <div className='w-full h-full absolute left-0 bottom-4 opacity-30 animate-bounce'>

          <div className="w-full h-full" >
            <Image src={tocina} alt='tocina' />
          </div>
      </div>
      <div className='w-full h-full absolute right-0 bottom-4 opacity-30 animate-bounce'>

          <div className="w-full h-full" >
            <Image src={tocina} alt='tocina' />
          </div>
      </div>

    <div className="absolute top-2 right-28 flex flex-wrap flex-col gap-4 animate-bounce">

      {
        Array.from({ length: 10 }, (_, index) => (
          <div className="flex-2 w-48 h-60" key={index}>
            <Image src={tocina} alt='tocina' />
          </div>
        ))
      }
      </div>
    <div className="absolute top-2 right-14 flex flex-wrap flex-col gap-4 animate-pulse">

      {
        Array.from({ length: 10 }, (_, index) => (
          <div className="flex-2 w-48 h-60" key={index}>
            <Image src={tocina} alt='tocina' />
          </div>
        ))
      }
      </div>
    <div className="absolute top-2 right-2 flex flex-wrap flex-col gap-4 animate-pulse">

      {
        Array.from({ length: 10 }, (_, index) => (
          <div className="flex-2 w-48 h-60" key={index}>
            <Image src={tocina} alt='tocina' />
          </div>
        ))
      }
      </div>
    {/* <div className="absolute top-2 right-0 flex flex-wrap flex-col gap-4 animate-bounce">

      {
        Array.from({ length: 10 }, (_, index) => (
          <div className="flex-2 w-48 h-60" key={index}>
            <Image src={tocina} alt='tocina' />
          </div>
        ))
      }
      </div> */}

      <div className="flex flex-nowrap animate-spin">
        {
          Array.from({ length: 10 }, (_, index) => (
            <div className="flex text-6xl" key={index}>
              TOCINA!
              {/* {index + 1} */}
            </div>
          ))
        }
      </div>
      <div className="flex flex-nowrap animate-spin absolute top-20 left-20">
        {
          Array.from({ length: 10 }, (_, index) => (
            <div className="flex text-6xl" key={index}>
              TOCINA!
              {/* {index + 1} */}
            </div>
          ))
        }
      </div>
      <div className="flex flex-col flex-nowrap animate-bounce absolute bottom-20 right-20 h-50 opacity-45">
        {
          Array.from({ length: 52 }, (_, index) => (
            <div className="flex flex-wrap text-6xl" key={index}>
              TOCINA!
              {/* {index + 1} */}
            </div>
          ))
        }
      </div>

      <div className="flex flex-col flex-nowrap animate-bounce absolute bottom-20 right-20 h-50 opacity-45">
        {
          Array.from({ length: 52 }, (_, index) => (
            <div className="flex flex-wrap text-6xl" key={index}>
              TOCINA!
              {/* {index + 1} */}
            </div>
          ))
        }
      </div>
      <div className="flex flex-nowrap animate-spin absolute bottom-10 left-20">
        {
          Array.from({ length: 10 }, (_, index) => (
            <div className="flex text-6xl" key={index}>
              TOCINA!
              {/* {index + 1} */}
            </div>
          ))
        }
      </div>
      <div className="flex flex-nowrap animate-spin absolute top-10 right-10">
        {
          Array.from({ length: 10 }, (_, index) => (
            <div className="flex text-6xl" key={index}>
              TOCINA!
              {/* {index + 1} */}
            </div>
          ))
        }
      </div>
      {/* <div className="flex text-6xl">
        TOCINA!
      </div> */}
    </div>
  )
}
