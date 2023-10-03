import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { MainPageContainer } from './components/MainPage/MainPageContainer';
import { AddNewHeroPage } from './components/AddNewHeroPage/AddNewHeroPage';
import { HeroArrContextContainer } from './components/Context/HeroArrContextContainer';
import { DetailsPage } from './components/DetailsPage/DetailsPage';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { EditHeroPage } from './components/EditHeroPage/EditHeroPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPageContainer />
  },
  {
    path: '/add-hero',
    element: <AddNewHeroPage />
  },
  {
    path: '/details',
    element: <DetailsPage />
  },
  {
    path: '/details/:id',
    element: <EditHeroPage />
  },
  {
    path: '*',
    element: <PageNotFound />
  }
])

const App = () => {
  return (
    <div className="App">
      <HeroArrContextContainer>
        <RouterProvider router={router} />
      </HeroArrContextContainer>
    </div>
  );
}

export default App;
