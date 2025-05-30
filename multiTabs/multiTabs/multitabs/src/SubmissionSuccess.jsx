import { Link } from 'react-router-dom';
import { useTab } from './TabContext'


export default function SubmissionSuccess() {
    const { resetFormData } = useTab();

    const handleClick = () => {
        resetFormData();
    }
    return(
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <p>✔️ Submission Successful!!!</p>
           <Link to="/" onClick={handleClick}>Go to Multi-Tab Form</Link>
        </div>
    )
}