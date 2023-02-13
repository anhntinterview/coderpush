import React from 'react';
import { Loading } from 'template/component/loading.template';
import { Route, Routes } from 'react-router-dom';

const NotesPage = React.lazy(
    () =>
        import(
            /* webpackChunkName: "StackExchangePage" */
            'app/pages/notes'
        )
);

function App() {
    return (
        <div className=''>
            <React.Suspense fallback={<Loading isLoading={true} />}>
                <Routes>
                    <Route path="" element={<NotesPage />} />
                </Routes>
            </React.Suspense>
        </div>
    );
}

export default App;
