import React from 'react'
import Link from 'gatsby-link'

import Button from '../components/Button'
import Timer from '../components/Timer'


// page component
export default function SecondPage() {
  return (
    <div>
      <h1>Component Testing Page</h1>
      <Button />
      <Timer countdownDate = "2018-01-22 12:00"/>
    </div>
  )
}
