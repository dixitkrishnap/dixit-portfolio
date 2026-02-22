import { useEffect, useState } from 'react';

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        const hCaptcha = event.target.querySelector(
            'textarea[name=h-captcha-response]'
        )?.value;

        if (!hCaptcha) {
            setResult("Please complete the captcha verification.");
            return;
        }

        setResult("Sending...");

        const formData = new FormData(event.target);

        // 🔹 Replace this later with your real Web3Forms access key
        formData.append("access_key", "ENTER_YOUR_ACCESS_KEY");

        // Temporary mock response (kept same as your structure)
        const res = {
            success: true,
            message: "Message sent successfully!",
        };

        if (res.success) {
            setResult(res.message);
            event.target.reset();
        } else {
            setResult("Something went wrong. Please try again.");
        }
    };

    function CaptchaLoader() {
        const captchadiv = document.querySelectorAll('[data-captcha="true"]');

        if (captchadiv.length) {
            captchadiv.forEach(function (item) {
                if (!item.dataset.sitekey) {
                    item.dataset.sitekey =
                        "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
                }
            });

            const script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.defer = true;
            script.src =
                "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";

            document.body.appendChild(script);
        }
    }

    useEffect(() => {
        CaptchaLoader();
    }, []);

    return (
        <div
            id="contact"
            className="w-full px-[12%] py-16 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
        >
            <h4 className="text-center mb-2 text-lg font-Ovo">
                Connect with me
            </h4>

            <h2 className="text-center text-4xl sm:text-5xl font-Ovo">
                Get in touch
            </h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/80">
                I’m always open to discussing opportunities, collaborations,
                or technical ideas. Feel free to reach out using the form below.
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">

                {/* Updated Subject */}
                <input
                    type="hidden"
                    name="subject"
                    value="Dixit Krishna - Portfolio Contact Form"
                />

                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="flex-1 px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
                        required
                        name="name"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="flex-1 px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
                        required
                        name="email"
                    />
                </div>

                <textarea
                    rows="6"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30"
                    required
                    name="message"
                ></textarea>

                <div
                    className="h-captcha mb-6 max-w-full"
                    data-captcha="true"
                ></div>

                <button
                    type="submit"
                    className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover transition"
                >
                    Send Message
                    <img
                        src="./assets/right-arrow-white.png"
                        alt=""
                        className="w-4"
                    />
                </button>

                <p className="mt-4 text-center">{result}</p>
            </form>
        </div>
    );
}