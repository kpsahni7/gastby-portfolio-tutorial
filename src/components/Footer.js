import { graphql, useStaticQuery } from 'gatsby'

import React from 'react'

export default function Footer() {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
            copyright
        }
      }
    }
    `)

    const {copyright} = data.site.siteMetadata
    return (
        <footer>
            <p>{copyright}</p>
        </footer>
    )
}
