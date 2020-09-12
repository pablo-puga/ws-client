import React from 'react';
import { Helmet } from 'react-helmet';

const About: React.FC = () => {
    return (
        <article className="w-full mx-auto px-5 pt-5 sm:pt-10 md:pt-15 lg:pt-20 xl:pt-25 font-sans text-center">
            <Helmet>
                <title>WebSockets Client - About</title>
            </Helmet>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900">
                About
            </h1>
        </article>
    );
};

export default About;
