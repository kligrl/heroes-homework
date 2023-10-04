import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { MainPageContainer } from './components/Pages/MainPage/MainPageContainer';
import { AddNewHeroPageContainer } from './components/Pages/AddNewHeroPage/AddNewHeroPageContainer';
import { DetailsPageContainer } from './components/Pages/DetailsPage/DetailsPageContainer';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { EditHeroPageContainer } from './components/Pages/EditHeroPage/EditHeroPageContainer';
import { Provider } from 'react-redux';
import { store } from './components/Redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPageContainer />
  },
  {
    path: '/add-hero',
    element: <AddNewHeroPageContainer />
  },
  {
    path: '/details',
    element: <DetailsPageContainer />
  },
  {
    path: '/details/:id',
    element: <EditHeroPageContainer />
  },
  {
    path: '*',
    element: <PageNotFound />
  }
])

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
