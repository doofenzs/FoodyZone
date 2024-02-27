import styles from './Navigation.module.css';

const Navigation = () => {

  return (
    <nav className= {`${styles.Navigation} container`}>
        <div className='logo'>
        <img className='image' src="#" alt="" />

        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  );
}

export default Navigation;
