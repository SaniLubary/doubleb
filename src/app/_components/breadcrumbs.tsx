import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import React, { useMemo } from 'react'

// localhost:3000/product/tituloproducto?category=remeras&season=summer
// Inicio / Remeras / Summer / TituloProducto
//           ^ -> remeras ^ -> remeras/summer

const Breadcrumbs = () => {
    const searchParams = useSearchParams()
    const params = useParams()
    console.log(params)
    const paramKeys: string[] = useMemo(() => {
        const val = []
        for(let key of searchParams.keys()) {
            val.push(key)
        }
        return val
    }, [searchParams])

    
    return (
        <div className="col-start-2 col-end-7">
            <Link href={'/'}>Inicio</Link>&nbsp;/&nbsp;
            {paramKeys.map((val: string, i) => {
                console.log(val)
                const urlParams = paramKeys.slice(0, i+1)
                const href = urlParams.reduce((prev, curr) => {
                    return prev + `&${curr}=${searchParams.get(curr)}`
                }, '/?')
                return <>
                    <Link key={val} href={href}>{searchParams.get(val)}</Link>&nbsp;/&nbsp;
                </>
            })}
            <span>Titulo de la remera</span>
        </div>
    )
}

export default Breadcrumbs