
import Day26Login from "./Day26Login";
import { Provider } from 'react-redux'
import store from "./store";

function Day26() {
    return (
        <Provider store={store}>
            <div className="App">
                
                <Day26Login/>
            </div>
        </Provider>

    );
}

export default Day26;