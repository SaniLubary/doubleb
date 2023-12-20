import * as React from "react"
import { SVGProps } from "react"
const Circle = (props: SVGProps<SVGSVGElement>) => (
    <div className="cursor-pointer">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={43}
            height={43}
            fill="none"
            {...props}
        >
            <circle cx={21.5} cy={21.5} r={21.5} fill={props.color} />
        </svg>
    </div>
)
export default Circle
