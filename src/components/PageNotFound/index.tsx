import React from 'react'

type Props = {}

function PageNotFound({ }: Props) {
    return (
        <div className='flex flex-col items-center justify-center bg-homeBg h-full bg-cover'>
            <span className='text-7xl'>404</span>
            <span className='text-5xl'>Page Not Found</span>
        </div>
    )
}

export default PageNotFound