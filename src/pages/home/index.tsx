import React, { useEffect } from 'react'

// 使用Mobx：
// 1.从 @/store 引入 useStore 统一管理函数
// 2.从 mobx-react-lite 引入 observer，并包裹当前组件，使mobx和react连接
import useStore from '../../store'
import { observer } from 'mobx-react-lite'

function Home() {
    const { home } = useStore()

    useEffect(() => {
        home.getAllCategory()
    }, [])

    return (
        <div>
            Home-page
            <div>{home.msg}</div>
            <div>使用二次封装axios请求数据</div>
            <ul>
                {
                    home.categoryList.length &&
                    home.categoryList.map(
                        item => <li key={item.id}>{item.name}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default observer(Home)