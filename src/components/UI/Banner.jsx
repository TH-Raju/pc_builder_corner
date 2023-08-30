import React from 'react';

const Banner = () => {
    return (
        <section
            className="relative bg-[url(https://images.unsplash.com/photo-1610366398516-46da9dec5931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWluZyUyMHBjJTIwc2V0dXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)] bg-cover bg-fit bg-center bg-no-repeat"
        >
            <div
                className="absolute inset-0 bg-white/95 sm:bg-transparent sm:from-white/70 sm:to-white/5 sm:bg-gradient-to-r :sm:bg-gradient-to-l"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Let's Build your

                        <strong className="block font-extrabold text-rose-700">
                            Dream PC.
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed text-black">
                        <span className='text-3xl font-bold'>"♥</span>Empower your imagination, assemble your potential, and craft your dreams into reality – one component, one click at a time. Build your dream PC and unleash a world of possibilities.<span className='text-3xl font-bold'>"♥</span>
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <button
                            href="#featured"
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Get Started
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;