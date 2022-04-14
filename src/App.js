import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './pages/HomePage';
import DealsPage from './pages/DealsPage';
import DealInfo from './pages/DealInfo';
import DealPricing from './pages/DealPricing';
import DealRequirement from './pages/DealRequirement';
import DealPublish from './pages/DealPublish';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/account/deals/create" element={<DealsPage/>}/>
        <Route path="/account/deals/create/1234/info" element={<DealInfo/>}/>
        <Route path="/account/deals/create/1234/pricing" element={<DealPricing/>}/>
        <Route path="/account/deals/create/1234/requirement" element={<DealRequirement/>}/>
        <Route path="/account/deals/edit/1234/publish" element={<DealPublish/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
