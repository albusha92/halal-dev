import React, { ReactNode, useEffect } from 'react'
import { Layout } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

// import { AppHeader, AppSider } from '@components'
// import { getAllTag } from '@modules/categories/Tag/tagSlice'
// import { getAllCategory } from '@modules/categories/CategoryList/categorySlice'
// import { selectLanguage } from '@modules/config/configSelector'

type Props = {
    children: ReactNode | JSX.Element
}

const MainLayout = ({ children }: Props) => {
    const dispatch = useDispatch()
    // const lang = useSelector(selectLanguage)

    // useEffect(() => {
    //     dispatch(getAllTag({ language: lang }))
    //     dispatch(getAllCategory({ language: lang }))
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [lang])

    const { Content } = Layout
    return (
        <Layout className="h-screen">
            {/* <AppHeader /> */}
            <Layout>
                {/* <AppSider /> */}
                <Content className="px-10 py-8 h-full overflow-y-scroll">
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout
