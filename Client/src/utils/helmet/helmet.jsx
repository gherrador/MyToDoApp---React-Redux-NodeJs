import { Helmet } from "react-helmet";

export const HelmetToDoApp = () => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>My ToDo App</title>
            <link rel="canonical" href="https://mynewtodoapp.herokuapp.com/" />
            <meta name="description" content="My ToDo App" />
        </Helmet>
    )
}



