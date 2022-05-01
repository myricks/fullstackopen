import Course from './components/Course';


const Total = (props) => {
  var total = 0;
  for (var i = 0; i < props.parts.length; i++) {
    total += props.parts[i].exercises;
  }
  return (
    <div>
      <p> {total} </p>
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
      }
    ]
  }


  return (
    <div>
      <Course course={course} />
    </div>
  );
}

export default App;
