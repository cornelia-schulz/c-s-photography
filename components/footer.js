import Image from 'next/image'

export default function Footer(){
    const currentYear = new Date().getFullYear()
    return (
        <footer className="my-5">
            <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between">
                <div className="ml-7 flex items-center mb-3">
                    2013-{currentYear} &copy; Cornelia Schulz
                </div>
                <div className="w-4/12 flex justify-end mb-3 mr-4">
                    <a className="mx-2" href="https://instagram.com/corneliaschulzphotography/">
                        <Image
                            src="/images/instagram.png"
                            alt="Visit me on Instagram"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a className="mx-2" href="https://www.flickr.com/photos/cornelia-schulz/">
                        <Image
                            src="/images/flickr.png"
                            alt="Visit me on Flickr"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a className="mx-1" href="https://www.facebook.com/pages/Cornelia-Schulz-Photography/117213031666328?ref=hl">
                        <Image
                            src="/images/facebook.png"
                            alt="Visit me on Facebook"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
            </div>        
        </footer>
    );
}