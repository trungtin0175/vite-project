import React from 'react'
import PropTypes from 'prop-types'

const DefaultLayout = ({ children }) => {
  return <div>{children}</div>
}

DefaultLayout.propTypes = { children: PropTypes.node.isRequired }
export default DefaultLayout
