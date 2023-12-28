import { useState } from 'react';
import './App.css';
import { TabNames } from './types/tabNames';
import Header from './components/header';
import Footer from './components/footer';
import SideBar from './components/sidebar';
import CreatePost from './components/createpost';
import PostList from './components/postList';

function App() {
  const [selectedTab, setSelectedTab] = useState<string>("Home");

  return (
    <>
      <div className='app-container'>
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
        <div className='content'>
          <Header></Header>
          {selectedTab === TabNames.Home ? <PostList></PostList> : <CreatePost></CreatePost>}
          <Footer></Footer>
        </div>
      </div>

    </>
  )
}

export default App
