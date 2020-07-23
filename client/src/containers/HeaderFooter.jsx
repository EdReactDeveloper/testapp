import React, { useState } from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import { Container, Row } from 'react-bootstrap';
import Wrapper from '../components/Wrapper';
import { logoutAction } from '../store/actions/auth';
import { getListAction } from '../store/actions/list';
import { searchQueryAction } from '../store/actions/search'

const HeaderFooter = (props) => {
  const dispatch = useDispatch()

  // data
  const { user, loggedIn, loading } = useSelector(state => state.auth)
  const { query } = useSelector(state => state.search)

  // methods
  const onChange = ({ e, type }) => {
    if (type == 'search') {
      dispatch(searchQueryAction(e.target.value))
    }
  }

  const submitSearch = (e) => {
    e.preventDefault(e)
    dispatch(getListAction(query))
  }

  const logout = () => {
    dispatch(logoutAction())
  }

  // props
  const payload = {
    methods: { logout, onChange, submitSearch },
    data: { user, loggedIn, query },
    loaders: { loading }
  }
  
  return (
    <Wrapper>
      <Header {...payload} />
      <Container>
        <Row>
          {props.children}
        </Row>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default HeaderFooter;