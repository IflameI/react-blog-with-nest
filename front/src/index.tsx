import ReactDOM from 'react-dom';
import './app/styles/styles.scss';
import App from "./app";

ReactDOM.render(<App/>,
        document.getElementById('root'),
);

process.env.REACT_APP_MODE === 'development' && module.hot && module.hot.accept();
