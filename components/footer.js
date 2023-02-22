import Image from 'next/image'

export default function Footer(){
    const currentYear = new Date().getFullYear()
    return (
        <footer className="my-5">
            <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between">
                <div className="sm:ml-7 flex items-center mb-3">
                    2013-{currentYear} &copy; Cornelia Schulz
                </div>
                <div className="sm:w-4/12 flex justify-end mb-3 sm:mr-4">
                    <a className="mx-2 relative h-[50px] sm:h-[30px] w-[50px] sm:w-[33px]" href="https://instagram.com/corneliaschulzphotography/">
                        <Image
                            src="/images/instagram.png"
                            alt="Visit me on Instagram"
                            fill
                            sizes='20vw'
                        />
                    </a>
                    <a className="mx-2 relative h-[50px] sm:h-[30px] w-[50px] sm:w-[33px]" href="https://www.flickr.com/photos/cornelia-schulz/">
                        <Image
                            src="/images/flickr.png"
                            alt="Visit me on Flickr"
                            fill
                            sizes='20vw'
                        />
                    </a>
                    <a className="mx-1 relative h-[50px] sm:h-[30px] w-[50px] sm:w-[33px]" href="https://www.facebook.com/pages/Cornelia-Schulz-Photography/117213031666328?ref=hl">
                        <Image
                            src="/images/facebook.png"
                            alt="Visit me on Facebook"
                            fill
                            sizes='20vw'
                        />
                    </a>
                </div>
            </div>        
        </footer>
    );
}