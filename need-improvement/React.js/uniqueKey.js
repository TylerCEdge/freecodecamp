const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue',
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((i) => {
    for (var x = 0; x <= frontEndFrameworks.length; x++) {
      return <li key={i + x}>{i}</li>;
    }
  }); // change code here
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}
// I don't understand why inspect doesn't show the key at all.  Maybe this one is to do with FCC's interface?  I'll have to play with this one in VS Code later on.
