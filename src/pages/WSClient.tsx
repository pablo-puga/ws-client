import React from 'react';

import underCostruction from '../under-construction.jpg';

const WSClient: React.FC = () => {
    return (
        <article className="h-screen w-full mx-auto px-5 pt-5 sm:pt-10 md:pt-15 lg:pt-20 xl:pt-25 font-sans text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900">
                WebSockets Client
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700">
                Simple WebSockets Client for development purposes.
            </h2>
            <img
                src={underCostruction}
                alt="Under Construction"
                className="w-full max-w-4xl mt-10 mx-auto shadow-xs md:shadow-sm lg:shadow-lg"
            />
            <small className="block pt-8 text-gray-600 md:text-base">
                By&nbsp;
                <a
                    href="https://github.com/pablo-puga"
                    title="Pablo Puga GitHub Profile"
                    className="font-medium hover:text-gray-900 transition-colors duration-300"
                >
                    Pablo Puga
                </a>
            </small>
        </article>
    );
};

export default WSClient;
