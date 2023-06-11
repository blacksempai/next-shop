import classes from './Contributions.module.css';

export default function Contributions() {
    return (
    <div>
        <h1 className={classes.title}>Contributors:</h1>
        <ol>
            <li>Andriy Moskalenko</li>
            <li>Robocode team</li>
        </ol>
    </div>
    )
}