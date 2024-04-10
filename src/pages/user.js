import React, {Component} from 'react';
import api from '../services/api';
import {
  Container,
  Header,
  Avatarperfil,
  Nameperfil,
  Bioperfil,
} from './styles';

export default class User extends Component {
  state = {
    stars: [],
  };

  async componentDidMount() {
    const {route} = this.props;
    const {user} = route.params;
    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({stars: response.data});
  }

  render() {
    const {route} = this.props;
    const {user} = route.params;
    const {stars} = this.state;

    return (
      <Container>
        <Header>
          <Avatarperfil source={{uri: user.avatar}} />
          <Nameperfil>Nome:{user.name}</Nameperfil>
          <Bioperfil>status: {user.status === 'Alive' ? 'Vivo' : 'Morto'}</Bioperfil>
          <Bioperfil>Ultima Localização: {user.location}</Bioperfil>
          <Bioperfil>Primeira Aparição: Episodio - {user.fistEp}</Bioperfil>
          <Bioperfil>Espécie: - {user.species}</Bioperfil>
          <Bioperfil>Gênero: {user.genero}</Bioperfil>
          <Bioperfil>Mundo de Origem: {user.mundoOrigem}</Bioperfil>
         
        </Header>
      </Container>
    );
  }
}
