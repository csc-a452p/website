"use client";

import { useEffect } from "react";

export default function TwitterEmbed() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <a href="https://twitter.com/csc_a452p?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @csc_a452p</a>;
}
