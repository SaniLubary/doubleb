'use client'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import Breadcrumbs from "../../_components/breadcrumbs";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
    return <div className="bg-dark text-white text-base py-24 col-span-12 grid grid-cols-6 gap-6">
        <Breadcrumbs />
    </div>
}