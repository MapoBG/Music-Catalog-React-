import Container from "react-bootstrap/Container";

import style from "./Layout.module.css"

const Layout = (props) => {

    return (
        <Container fluid className={style.layout}>
            {props.children}
        </Container>
    );
};

export default Layout;