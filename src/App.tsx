import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { MainPageContainer } from './components/Pages/MainPage/MainPageContainer';
import { AddNewHeroPageContainer } from './components/Pages/AddNewHeroPage/AddNewHeroPageContainer';
import { HeroArrContextContainer } from './components/Context/HeroArrContextContainer';
import { DetailsPageContainer } from './components/Pages/DetailsPage/DetailsPageContainer';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { EditHeroPageContainer } from './components/Pages/EditHeroPage/EditHeroPageContainer';

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
      <HeroArrContextContainer>
        <RouterProvider router={router} />
      </HeroArrContextContainer>
    </div>
  );
}

export default App;
