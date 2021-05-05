import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { connect } from 'react-redux'
import InputSubmit from '../components/InputSubmit'
import '../pages/Home.css'
import DataTable from 'react-data-table-component';
import { addToFavourites } from '../service/actions/actions/actions'

class Home extends Component {

  columns = [
    {
      name: 'Avatar',
      cell: row => <img height="30px" width="30px" alt={row.full_name} src={row.owner.avatar_url} />
    },
    {
      name: 'Full Name',
      selector: 'full_name',
      sortable: true,
    },
    {
      name: 'URL',
      cell: row => <a href={row.clone_url}>{row.clone_url}</a>
    },
    {
      name: 'Forks',
      selector: 'forks',
      sortable: true,
    },
    {
      name: 'Stars',
      selector: 'watchers',
      sortable: true,
    },
    {
      name: '',
      cell: row => <div><button onClick={() => this.addItems(row)} className="addButton" height="30px" width="30px" alt={row}>Add To Favourites</button></div>
    },
  ];

  state = {
    repos: []
  }

  componentDidMount() {
    this.searchRepos('miniclass')
  }

  addItems(row){
    if (window.confirm('Are you sure you want to add it to the favourites?')) {
      this.props.addToFavouritesHandler(row);
      alert("Item has been added successfully!")
    } else {
      return;
    }
    
 }

  searchRepos(keyword) {
    this.setState({ repos: [] })
    axios
      .get(`https://api.github.com/search/repositories?q=${keyword}`)
      .then((result) => {
        var data = result.data.items
        this.setState({ repos: data })
      })
  }

  render() {
    return (
      <Container>
        <InputSubmit
          placeholder="Enter Repository Name"
          buttonText="Search"
          onSubmit={value => this.searchRepos(value)}
        />
        <DataTable
          columns={this.columns}
          data={this.state.repos}
          highlightOnHover
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 15, 25, 50]}
          paginationComponentOptions={{
            rowsPerPageText: 'Records per page:',
            rangeSeparatorText: 'out of',
          }}
        />
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


const mapStateToProps=state=>({
  // data:state.cardItems
})

const mapDispatchToProps=dispatch=>({
  addToFavouritesHandler:data=>dispatch(addToFavourites(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
