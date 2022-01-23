import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import {Headings} from './src/components/Complete'

const Code = ({children}) => {
    return <code className='code'>{children}</code>
}

const components = {
    h2: Headings.myH2,
    h4: Headings.myH4,
    inlineCode: Code,
}

export const wrapMDX = ({element}) => {
    return (
        <MDXProvider components={components}>
            {element}
        </MDXProvider>
    )
}