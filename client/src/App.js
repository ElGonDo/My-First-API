import Footer from './components/Footer';
import Header from './components/Header';
import UsersList from './components/User';
import UserDelete from './components/UserDelete';
import UserPost from './components/UserPost';
import UserPatch from './components/UserPatch';
import './styles/App.css';

function App() {
  return (
    <div className='container-main'>
      <Header />
      <div className="content">
        <UsersList />
        <UserPost />
        <UserDelete />
        <UserPatch />
      </div>
      <Footer />
    </div>
  );
}

export default App;
