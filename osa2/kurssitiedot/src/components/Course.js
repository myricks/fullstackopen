const Header = ({ header }) => {
    return (
        <div>
            <h1> {header} </h1>
        </div>
    );
}

const Part = ({ part }) => {
    return (
        <div>
            <p> {part.name} {part.exercises} </p>
        </div>
    );
}

const Content = ({ parts }) => {
    return (
        <div>
            {
                parts.map(item =>
                    <Part key={item.id} part={item} />
                )
            }
        </div>
    );
}

const Course = ({ course }) => {
    return (
        <div>
            <Header header={course.name} />
            <Content parts={course.parts} />
        </div>
    );
}
export default Course;