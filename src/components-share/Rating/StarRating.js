import React from "react"
import Rating from "react-rating"

export default function StarRating(props) {
    const { initialRating } = props
    return (
        <div style={{ color: "#ff9800" }}>
            <Rating
                emptySymbol={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        className="svg-inline--fa fa-star"
                        role="img"
                        viewBox="0 0 576 512"
                    >
                        <path
                            fill="currentColor"
                            d="M528.5 171.5l-146.4-21.29l-65.43-132.4C310.9 5.971 299.4-.002 287.1 0C276.6 0 265.1 5.899 259.3 17.8L193.8 150.2L47.47 171.5C21.2 175.3 10.68 207.6 29.72 226.1l105.9 102.1L110.6 474.6C107 495.3 123.6 512 142.2 512c4.932 0 10.01-1.172 14.88-3.75L288 439.6l130.9 68.7c4.865 2.553 9.926 3.713 14.85 3.713c18.61 0 35.21-16.61 31.65-37.41l-25.05-145.5l105.9-102.1C565.3 207.6 554.8 175.3 528.5 171.5zM390.2 320.6l22.4 130.1l-117.2-61.48c-4.655-2.442-10.21-2.442-14.87 .0001L163.4 450.7l22.4-130.1C186.7 315.4 184.1 310.1 181.2 306.4l-94.7-92.09l130.9-19.04C222.6 194.5 227.1 191.2 229.4 186.5L288 67.99l58.59 118.5c2.331 4.717 6.833 7.986 12.04 8.744l130.9 19.04l-94.7 92.09C391 310.1 389.3 315.4 390.2 320.6z"
                        />
                    </svg>
                }
                fullSymbol={
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="svg-inline--fa fa-star"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                    >
                        <path
                            fill="currentColor"
                            d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"
                        ></path>
                    </svg>
                }
                readonly
                initialRating={initialRating}
            />
        </div>
    )
}
