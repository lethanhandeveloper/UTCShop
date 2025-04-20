import { Footer } from "antd/es/layout/layout"

const AppFooter = () => {
    return(
        <Footer style={{ textAlign: 'center' }}>
            UTC Shop ©{new Date().getFullYear()} Created by Le Thanh An
        </Footer>
    )
}

export default AppFooter;