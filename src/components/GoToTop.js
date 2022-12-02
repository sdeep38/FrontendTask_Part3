import React, { useEffect, useState } from 'react'

export default function GoToTop() {

    const [isVisible, setIsVisible] = useState(false);

    const gototop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const listenToScroll = () => {
        let heightToHide = 250;

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHide) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
    }, [])

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <button id="scroll-top" onClick={gototop}>
                    <span className="fa fa-angle-up"></span>
                </button>
            )}
        </div>
    )
}
