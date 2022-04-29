
const Header = (props) => {
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  );
}

const Part = (props) => {
  return (
    <div>
      <p> {props.parts.name} {props.parts.exercises} </p>
    </div>
  );
}

const Content = (props) => {
  return (
    <div>
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </div>
  );
}

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
  const course = 'Half stack application development';
  const parts = [{
    name: 'Fundamentals of react',
    exercises: 10
  },

  {
    name: 'Using props to pass data',
    exercises: 7
  },

  {
    name: 'State of a component',
    exercises: 14
  }]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App;
