import { Fragment, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'

export async function getStaticProps() {
  const results = await search({
    expression: 'folder="Cornelia Schulz Photography"'
  })
  const { resources } = results
  const images = mapImageResources(resources)
  return {
    props: {
      images
    },
  }
}

export default function Modal ({
  expression = '',
  title = '',
  content = '',
  images = [],
  image = '',
  buttons = '',
  classes = '',
  onDiscard = '',
  onConfirm = '',
  children
}) {
    const [isOpen, setIsOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(images[image])
    const [currentIndex, setCurrentIndex] = useState(null)
    const [isFirst, setIsFirst] = useState(false)
    const [isLast, setIsLast] = useState(false)
    const [hasButtons, setHasButtons] = useState(false)

    useEffect(() => {
      checkForButtons()
      const current = images.findIndex(entry => {
        return entry.id === currentImage.id
      })
      setCurrentIndex(current)
      if(currentIndex === 0) setIsFirst(true)
      if(currentIndex === images.length-1) setIsLast(true)
    }, [currentIndex, isFirst, isLast, buttons])

    const handleChange = () => {
      setIsOpen(!isOpen)
      if (!isOpen) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    }

    const nextImage = () => {
        if(!isLast) {
          setCurrentImage(images[currentIndex+1])
          setCurrentIndex(currentIndex+1)
          setIsFirst(false)
        }
    }

    const previousImage = () => {
        if(!isFirst) {
          setCurrentImage(images[currentIndex-1])
          setCurrentIndex(currentIndex-1)
          setIsLast(false)
        }
    }

    const checkForButtons = () => {
      if(buttons.length > 0) {
        setHasButtons(true)
      }
    }

    return <>
      <div onClick={() => handleChange()}>
        {children}
      </div>

      <Transition show={isOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-all duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all duration-200"
          leaveTo="opacity-0"
          leaveFrom="opacity-100"
        >
          <div style={{ zIndex: '1' }} onClick={() => handleChange()} className="w-full h-full left-0 top-0 bg-opacity-80 bg-black absolute" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition-all duration-200"
          enterFrom="opacity-0 scale-75"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-200"
          leaveTo="opacity-0 scale-75"
          leaveFrom="opacity-100 scale-100"
        >
          <div style={{ zIndex: '2' }} className="flex justify-center items-center w-screen h-screen bg-opacity-95 bg-black absolute left-0 top-0">
            <div className={`${classes ? classes : 'p-4 bg-white rounded-lg relative'}`}>
              <div className="w-full flex justify-between items-center mb-6">
                <h3 className="font-normal text-[22px] text-lg text-black sm:tracking-[17px]">{currentImage.title}</h3>
                <div onClick={() => handleChange()} className="w-8 h-8 flex justify-center items-center rounded-lg transition-all duration-200 cursor-pointer hover:bg-dark-orange">
                  <svg width="24px" height="24px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path className="clr-i-outline clr-i-outline-path-1" d="M19.41,18l8.29-8.29a1,1,0,0,0-1.41-1.41L18,16.59,9.71,8.29A1,1,0,0,0,8.29,9.71L16.59,18,8.29,26.29a1,1,0,1,0,1.41,1.41L18,19.41l8.29,8.29a1,1,0,0,0,1.41-1.41Z" />
                    <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
                  </svg>
                </div>
                <div className="absolute w-full flex justify-between top-1/2 left-0 transform -translate-y-1/2 z-10">
                  <button className={`${isFirst ? 'invisible' : 'bg-white bg-opacity-30 text-orange text-4xl ml-5 rounded-full px-4 py-1'}`} onClick={previousImage} disabled={isFirst}>&lt;</button>
                  <button className={`${isLast ? 'invisible' : 'bg-white bg-opacity-30 text-orange text-4xl mr-5 rounded-full px-4 py-1'}`} onClick={nextImage} disabled={isLast}>&gt;</button>
                </div>
              </div>
              {/* <div className="absolute w-full flex justify-between top-1/2 left-0 transform -translate-y-1/2 z-10">
                <button className={`${isFirst ? 'invisible' : 'bg-white bg-opacity-30 text-orange text-4xl ml-5 rounded-full px-4 py-1'}`} onClick={previousImage} disabled={isFirst}>&lt;</button>
                <button className={`${isLast ? 'invisible' : 'bg-white bg-opacity-30 text-orange text-4xl mr-5 rounded-full px-4 py-1'}`} onClick={nextImage} disabled={isLast}>&gt;</button>
              </div> */}
              {/*} using img tag rather than Image because of sizing issues */}
                <img 
                  src={currentImage.url}
                  alt={currentImage.title}
                  className={`${currentImage.landscape ? 'max-w-full h-auto max-h-[80vh] mx-auto shadow-lg' : 'w-auto h-[80vh] mx-auto shadow-lg'}`}
                />
              <p className="text-md mt-4 text-black">{content}</p>
              <div className="flex justify-end">
                <Image
                  src="/images/CS_photgraphy_transparent-black.png"
                  alt="Cornelia Schulz Photography Logo"
                  width={190}
                  height={80}
                />
              </div>
              <div className={`${hasButtons ? "mt-6 flex justify-end items-center gap-2" : "hidden"}`}>
                {buttons.map((button, index) => (
                  <button 
                      onClick={() => {
                        if(button.role === "discard") {
                            onDiscard()
                        }
                        if(button.role === "confirm") {
                            onConfirm()
                        }
                        if(button.role === "custom") {
                            button.onClick()
                        }
                        if(button.toClose) {
                            setIsOpen(false)
                        }
                      }}
                      key={index} 
                      className={button.classes}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Transition.Child>
      </Transition>
    </>
}