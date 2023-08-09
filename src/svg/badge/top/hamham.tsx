import { CSSProperties } from "react";

export const HamhamTop = (props : { className? : string, style? : CSSProperties}) => {
    return (
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402 132" className={props.className}>
            <path fill={props.style?.borderColor} d="m0 86v86h13v-159c304 0 313.3 0.1 311 1.7-1.4 0.9-4.3 2.2-6.5 2.8-2.8 0.7-4.4 1.9-5.3 3.8-1 2.3-0.9 3.1 0.5 5.5 0.9 1.5 1.8 5.2 2 8.2 0.2 3 1.1 7.8 2 10.5 1.3 3.6 3.6 7 8.8 12.2 5.5 5.7 7.6 7.3 10 7.3 1.6 0.1 3.5-0.5 4.2-1.2 0.6-0.8 4.8-1.6 10-2 4.8-0.4 11-1.5 13.8-2.4q5-1.8 10-6.9c2.7-2.8 6.9-7.1 9.3-9.6l4.3-4.4c-2.7-6.2-3.3-9.3-3.2-11 0.2-1.7-0.4-3.8-1.3-4.7-0.9-1-3-1.8-4.6-1.8-1.8 0-5.1-1.4-8.3-3.6-2.8-2-5.4-3.8-5.7-4-0.3-0.3 5.2-0.4 12.2-0.4h12.8v159h13v-172h-402z"/>
	        <path fill={props.style?.color} d="m13 92.5v79.5h376v-159c-19.8 0-25.3 0.1-25 0.4 0.3 0.2 2.9 2 5.8 4 3.1 2.2 6.4 3.6 8.2 3.6 1.6 0 3.7 0.8 4.6 1.8 0.9 0.9 1.5 3 1.3 4.7-0.1 1.6 0.5 4.8 1.5 7l1.7 4c-6.7 6.9-10.8 11.2-13.6 14q-5 5.1-10 6.9c-2.7 0.9-9 2-13.8 2.4-5.2 0.4-9.4 1.2-10 2-0.7 0.7-2.6 1.3-4.2 1.2-2.4 0-4.5-1.6-10-7.3-5.2-5.2-7.5-8.6-8.8-12.2-0.9-2.8-1.8-7.5-2-10.5-0.2-3-1.1-6.7-2-8.3-1.4-2.3-1.5-3.1-0.4-5.4 0.8-1.9 2.4-3.1 5.2-3.8 2.2-0.6 5.1-1.9 6.5-2.8 2.3-1.6-7-1.7-154.3-1.7h-156.7z"/>
        </svg>
    );
};