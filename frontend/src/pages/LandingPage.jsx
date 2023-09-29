import Button from '../components/Button';

const LandingPage = (props) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-white m-4 text-2xl'>
        <em>LavenderPass</em>
      </p>
      <img className='mt-4' src="../assets/locker.png" alt='locker'/>
      <p className='text-white m-4'>Manage your passwords <span className='text-btn-color'>securely</span> </p>
      <Button onClick={props.onClick}>Get Started</Button>
    </div>
  );
};

export default LandingPage;