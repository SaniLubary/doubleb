import * as React from "react"
import { SVGProps } from "react"
const Star = (props: SVGProps<SVGSVGElement> & { stars: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={34}
        height={33}
        fill="none"
        {...props}
    >
        <path
            fill="url(#grad)"
            d="M16.049.927c.3-.921 1.603-.921 1.902 0l3.315 10.202a1 1 0 0 0 .95.69h10.727c.97 0 1.372 1.24.588 1.81l-8.678 6.305a1 1 0 0 0-.363 1.118l3.315 10.201c.299.922-.756 1.688-1.54 1.118l-8.677-6.305a1 1 0 0 0-1.176 0l-8.678 6.305c-.784.57-1.838-.196-1.539-1.118L9.51 21.052a1 1 0 0 0-.363-1.118L.469 13.629c-.784-.57-.381-1.81.588-1.81h10.726a1 1 0 0 0 .951-.69L16.05.927Z"
        />
        <defs>
            <linearGradient id="grad">
                {Array(5).fill(0).map((_v, i) => {
                    return <stop key={i + '_star'} offset={`${20 * i}%`} stop-color={i< props.stars ? "#FFD74A" : 'grey'} />
                })}
            </linearGradient>
        </defs>
    </svg>
)
export default Star
