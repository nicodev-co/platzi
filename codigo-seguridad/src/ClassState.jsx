import React from 'react';
import { Loading } from './loading';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: false,
      loading: false
    }
  }

  
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');

    if (this.state.loading) {
      setTimeout(() => {
        console.log('Haciendo la validación');

        if (this.state.value === SECURITY_CODE) {
          this.setState({error: false, loading: false});
        }else {
          this.setState({error: true,loading: false});
        }
        console.log('Terminando la validación');
      }, 3000);
    }
  }
  
  render() {
    const { name } = this.props;
    const { error,loading, value } = this.state;
    return (
      <div>
        <h2>Eliminar {name}</h2>

        <p>Por favor, escribe el código de seguridad.</p>
        {(error && !loading) && <p>Error: el código es incorrecto</p>}
        {loading && (<Loading />)}
        <input placeholder='Código de seguridad' value={value} onChange={(event) => {this.setState({value:event.target.value})}} />
        <button onClick={() => this.setState({loading: true})}>Comprobar</button>
      </div>
    );
  }
}

export { ClassState };
