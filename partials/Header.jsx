import Button from '../components/button/Button';

function Header(user) {

    return (
        <>
            <div className="logo">

            </div>
            <div className="businessOptions">
                <Button text="Így működik" />
                <Button text="Ajánlatkérés" />
                <Button text="Környezetünkért" />
            </div>
            <div className="userOptions">
                <Button text="Így működik" />
                <Button text="Ajánlatkérés" />
                <Button text="Környezetünkért" />

            </div>
        </>
    );
}

export default Header;