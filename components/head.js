import NextHead from 'next/head'
import { string } from 'prop-types'

const Head = (props) => (
  <NextHead>
    <link rel="stylesheet" type="text/css" href="/static/css/next.css" />
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicon.ico" />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string
}

export default Head
