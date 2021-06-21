import { FaDiscord } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="px-2 py-4 bg-gray-color-dark-200 absolute bottom-0 w-full">
            <div className={'flex justify-center items-center flex-col w-full'}>
                <div
                    className={
                        'flex justify-center items-center flex-col px-36 py-5 w-full'
                    }
                >
                    <a className="py-3 text-white font-bold text-lg" href="">
                        Home
                    </a>
                    <a className="py-3 text-white font-bold text-lg" href="">
                        About
                    </a>
                    <a className="py-3 text-white font-bold text-lg" href="">
                        Commands
                    </a>
                </div>
                <div className="flex justify-center items-center">
                    <FaDiscord color="white" size="45" />
                </div>
                <a className={'xdrgtyhyu tyhythn ufinvuigfrnit riungburitr'}>
                    ythyjyujtymghkytmhjyuhnyju
                </a>
            </div>
        </footer>
    );
};
export default Footer;
