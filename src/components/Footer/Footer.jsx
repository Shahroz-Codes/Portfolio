import { mySocials } from "../../constants";

const Footer = () => {
    return (
        <section className="c-space mt-10 text-sm text-neutral-400">
            {/* Divider Line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-4" />

            {/* Terms & Privacy */}
            <div className="flex flex-wrap items-center justify-between gap-5 pb-3">
                <div className="flex gap-2">
                    <p>Terms & Conditions</p>
                    <span>|</span>
                    <p>Privacy Policy</p>
                </div>

                {/* Copyright */}
                <p>© 2025 Shahroz. All rights reserved.</p>
            </div>

            {/* Floating Social Icons */}
            <div
                className="fixed right-3 top-3/4 -translate-y-1/2 flex flex-col items-center
                space-y-4 p-3 rounded-full backdrop-blur-lg bg-black/10 
                ring-2 ring-violet-600 shadow-inner shadow-violet-600"
            >
                {mySocials.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full hover:scale-110 transition-transform hover:shadow-md hover:shadow-violet-600"
                    >
                        <img
                            src={social.icon}
                            alt={social.name}
                            className="w-5 h-5"
                            loading="lazy"
                        />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Footer;
