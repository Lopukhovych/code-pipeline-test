import DefaultPageWrapper from '../../components/default-page-wrapper/DefaultPageWrapper';
import './Home.css';

const Home = () => {
  return (
    <div className="Home-container">
      <DefaultPageWrapper>
        <div className="Main-container">
          <h4 className="Main-header">Main content</h4>
          <div>
            <p>This is updated content</p>
          </div>
        </div>
      </DefaultPageWrapper>
    </div>
  );
};

export default Home;
