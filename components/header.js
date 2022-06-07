import Image from 'next/image'

export default function Header(){
    return (
        <header>
            <Image
                src="/images/CS_photgraphy_transparent-white.png"
                alt="Cornelia Schulz Photography Logo"
                width={290}
                height={120}
            />
            <Image
                src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/51365510750_14a78ee09c_k_ue2pqq.jpg"
                alt="Galaxy"
                width={1000}
                height={750}
            />
        </header>
    );
}