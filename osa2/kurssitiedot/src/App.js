import Course from './components/Course';


const Total = ({ parts }) => {
  const total = parts.reduce(
    (previousValue, parts) => previousValue + parts.exercises, 0);
  return (
    <div>
      <h4>
        Total of {total} exercises
      </h4>
    </div>
  )
}

const App = () => {
  const course =
  {
    name: 'Half stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of react',
        exercises: 10,
        id: 1
      },

      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },

      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }


  return (
    <div>
      <Course course={course} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
