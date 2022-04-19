import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './pages/HomePage';
import DealsPage from './pages/DealsPage';
import DealInfo from './pages/DealInfo';
import DealPricing from './pages/DealPricing';
import DealRequirement from './pages/DealRequirement';
import DealPublish from './pages/DealPublish';
import ProjectDetails from './pages/ProjectDetails';
import Dashboard from './pages/Dashboard';
import CatBusiness from './pages/CatBusiness';
import DealsCat from './pages/DealsCat';
import Account from './pages/Account';
import AccountProfile from './pages/AccountProfile';
import AccountOrders from './pages/AccountOrders';
import AccountDeals from './pages/AccountDeals';
import AccountProject from './pages/AccountProject';
import ProjectBid from './pages/ProjectBid';
import ProjectBidA from './pages/ProjectBidA';
import ProjectBidR from './pages/ProjectBidR';
import Favorites from './pages/Favorites';
import FavoritesAccepted from './pages/FavoritesAccepted';
import FavDeals from './pages/FavDeals';
import Messages from './pages/Messages';
import UserMsg from './pages/UserMsg';
import User from './pages/User';
import UserDeal from './pages/UserDeal';
import UserProject from './pages/UserProject';
import UserReview from './pages/UserReview';
import EarnWith from './pages/EarnWith';
import EarnWithNew from './pages/EarnWithNew';
import Wallet from './pages/Wallet';
import Deposit from './pages/Deposit';
import AccountReviews from './pages/AccountReviews';
import ReviewsSent from './pages/ReviewsSent';
import ReviewsRecieved from './pages/ReviewsRecieved';
import Settings from './pages/Settings';
import ProfileEdit from './pages/ProfileEdit';


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
        <Route path="/project/c1d00230-a423-4b84-a121-7105239ff8d8" element={<ProjectDetails/>}/>
        <Route path="/account/dashboard" element={<Dashboard/>}/>
        <Route path="/category/business/projects" element={<CatBusiness/>}/>
        <Route path="/deals" element={<DealsCat/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/account/profile" element={<AccountProfile/>}/>
        <Route path="/account/orders" element={<AccountOrders/>}/>
        <Route path="/account/deals" element={<AccountDeals/>}/>
        <Route path="/account/projects" element={<AccountProject/>}/>
        <Route path="/account/project-bids" element={<ProjectBid/>}/>
        <Route path="/account/project-bids/accepted" element={<ProjectBidA/>}/>
        <Route path="/account/project-bids/rejected" element={<ProjectBidR/>}/>
        <Route path="/account/favourites" element={<Favorites/>}/>
        <Route path="/account/favourites/projects" element={<FavoritesAccepted/>}/>
        <Route path="/account/favourites/deals" element={<FavDeals/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/messages/user000000" element={<UserMsg/>}/>
        <Route path="/user/abcde12345" element={<User/>}/>
        <Route path="/user/abcde12345/deals" element={<UserDeal/>}/>
        <Route path="/user/abcde12345/projects" element={<UserProject/>}/>
        <Route path="/user/abcde12345/reviews" element={<UserReview/>}/>
        <Route path="/account/earnings-withdrawals" element={<EarnWith/>}/>
        <Route path="/account/earnings-withdrawals/new" element={<EarnWithNew/>}/>
        <Route path="/account/wallet" element={<Wallet/>}/>
        <Route path="/account/wallet/deposit" element={<Deposit/>}/>
        <Route path="/account/reviews" element={<AccountReviews/>}/>
        <Route path="/account/reviews/sent" element={<ReviewsSent/>}/>
        <Route path="/account/reviews/received" element={<ReviewsRecieved/>}/>
        <Route path="/account/settings" element={<Settings/>}/>
        <Route path="/account/profile/edit" element={<ProfileEdit/>}/>



        



        


        




        



        


       







        




        





        





        


        


      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
