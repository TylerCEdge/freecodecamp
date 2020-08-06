class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}
// change code below this line

class Camper extends React.Component {
  // I tripped up here and ended up overdoing this component.  I originally used the correct syntax and tripped up using propTypes and the syntax required.
  constructor(props) {
    // My attempted passed the challenge but I definitely need to practice this some more to reinforce it.
    super(props);
  }
  render() {
    return <p>{this.props.name}</p>;
  }
}

Camper.propTypes = {
  name: PropTypes.string.isRequired,
};

Camper.defaultProps = {
  name: 'CamperBot',
};

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}
// change code below this line
const Camper = (props) => {
  return <p>{props.name}</p>; // Second attempt.  The only thing I stumbled on was forgetting the return statement.
}; // FCC solution showed me I could have improved my syntax further const Camper = (props) => <p>{props.name}</p>
//  If I remember correctly this is only possible because this component returns a single item.
Camper.propTypes = {
  name: PropTypes.string.isRequired,
};

Camper.defaultProps = {
  name: 'CamperBot',
};
