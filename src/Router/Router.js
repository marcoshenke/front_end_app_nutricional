import { Route, Routes, Outlet } from 'react-router-dom';
import { CompareFoods, Home, Page404 } from 'Views';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="compare-foods" element={<CompareFoods.Main />} />
      <Route path="compare-foods/graphic" element={<CompareFoods.Graphic />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
