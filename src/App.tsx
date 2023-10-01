import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { MainPage } from './components/MainPage/MainPageContainer';
import { AddNewHeroPage } from './components/AddNewHeroPage/AddNewHeroPage';
import { HeroArrContextContainer } from './components/Context/HeroArrContextContainer';
import { DetailsPage } from './components/DetailsPage/DetailsPage';
import { PageNotFound } from './components/PageNotFound/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/AddHero',
    element: <AddNewHeroPage />
  },
  {
    path: '/Details',
    element: <DetailsPage />
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
