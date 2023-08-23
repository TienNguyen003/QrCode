import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes/routes';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    {publicRoutes.map((item, index) => {
                        const Page = item.component;
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={<Page />}
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
