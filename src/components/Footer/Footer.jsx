import { mySocials } from "../../constants";
const Footer = () => {
    return (
        <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space mt-10">
            <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
            <div className="flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div
                className="fixed right-3 top-1/2 -translate-y-1/2 flex flex-col items-center
             space-y-4 p-3 rounded-full backdrop-blur-lg bg-black/10 
             ring-2 ring-violet-600 shadow-inner shadow-violet-600"
            >
                {mySocials.map((social, index) => (
                    <a
                        href={social.href}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition duration-150 rounded-full ease-in-out hover:scale-125 hover: shadow-md hover:shadow-violet-600"
                    >
                        <img
                            src={social.icon}
                            alt={social.name}
                            className="w-5 h-5  "
                        />
                    </a>
                ))}
            </div>
            <p>© 2025 Shahroz. All rights reserved.</p>
        </section>
    );
};

export default Footer;
