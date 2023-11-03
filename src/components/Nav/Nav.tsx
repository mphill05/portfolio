import styles from './Nav.module.scss';
import { MyLinks } from './components/MyLinks';
import { StyledButton } from '../Buttons/StyledButton';

export const Nav = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <StyledButton onClick={() => window.open('/resume.pdf')}>
        My resume
      </StyledButton>
    </header>
  );
};
