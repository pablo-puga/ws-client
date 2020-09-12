import React, { useEffect } from 'react';

const WSClient: React.FC = () => {
    useEffect(() => {
        document.title = 'WebSockets Client';
    });

    return (
        <article className="w-full mx-auto px-5 pt-5 sm:pt-10 md:pt-15 lg:pt-20 xl:pt-25 font-sans text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900">
                WebSockets Client
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700">
                Simple WebSockets Client for development purposes.
            </h2>
        </article>
    );
};

export default WSClient;
