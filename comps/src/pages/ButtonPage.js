import Button from '../components/Button';

function ButtonPage() {
    return (
        <div>
            <div>
                <Button primary rounded>primary</Button>
            </div>
            <div>
                <Button secondary>secondary</Button>
            </div>
            <div>
                <Button success>success</Button>
            </div>
            <div>
                <Button danger>danger</Button>
            </div>
            <div>
                <Button warning>warning</Button>
            </div>
            <div>
                <Button primary outline rounded>primary</Button>
            </div>
            <div>
                <Button secondary outline>secondary</Button>
            </div>
            <div>
                <Button success outline>success</Button>
            </div>
            <div>
                <Button danger outline>danger</Button>
            </div>
            <div>
                <Button warning outline>warning</Button>
            </div>
        </div>
    )
}

export default ButtonPage;