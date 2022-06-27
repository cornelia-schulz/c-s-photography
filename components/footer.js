import Image from 'next/image'

export default function Footer(){
    const currentYear = new Date().getFullYear()
    return (
        <footer className="mb-2">
            <div className="flex justify-between">
                <div className="ml-7 flex items-center">
                    2013-{currentYear} &copy; Cornelia Schulz
                </div>
                <div className="w-4/12 flex justify-end mr-4">
                    <a className="mx-1" href="https://instagram.com/corneliaschulzphotography/">
                        <Image
                            src="/images/instagram.png"
                            alt="Visit me on Instagram"
                            width={40}
                            height={40}
                        />
                    </a>
                    <a className="mx-2" href="https://www.flickr.com/photos/cornelia-schulz/">
                        <Image
                            src="/images/flickr.png"
                            alt="Visit me on Flickr"
                            width={40}
                            height={40}
                        />
                    </a>
                    <a className="mx-1" href="https://www.facebook.com/pages/Cornelia-Schulz-Photography/117213031666328?ref=hl">
                        <Image
                            src="/images/facebook.png"
                            alt="Visit me on Facebook"
                            width={40}
                            height={40}
                        />
                    </a>
                </div>
            </div>        
        </footer>
    );
}