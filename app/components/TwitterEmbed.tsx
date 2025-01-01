"use client";

import { useEffect } from "react";

export function TwitterFollowButton({ id }: { id: string }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <a href={`https://twitter.com/${id}?ref_src=twsrc%5Etfw`} className="twitter-follow-button" data-show-count="false">Follow @{id}</a>;
}

export function TwitterTimeline({ id }: { id: string }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <a className="twitter-timeline" href={`https://twitter.com/${id}?ref_src=twsrc%5Etfw`}>Tweets by {id}</a> ;
}

