import React from 'react'

import useStore from '../../store'
import { observer } from 'mobx-react-lite'

function About() {
    const { about } = useStore()

    return (
        <div>
            About-page
            <div>{about.msg}</div>
        </div>
    )
}

export default observer(About)