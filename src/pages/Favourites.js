import React, { Component } from 'react'
import { connect } from 'react-redux'
import DataTable from 'react-data-table-component';


class Favourites extends Component {

  constructor(props){
    super();
  }

  columns = [
    {
      name: 'Avatar',
      cell: row => <img height="30px" width="30px" alt={row.cardData.full_name} src={row.cardData.owner.avatar_url} />
    },
    {
      name: 'Full Name',
      cell: row => <p>{row.cardData.full_name}</p>
    },
    {
      name: 'URL',
      cell: row => <a href={row.cardData.clone_url}>{row.cardData.clone_url}</a>
    },
    {
      name: 'Forks',
      sortable: true,
      cell: row => <p>{row.cardData.forks}</p>
    },
    {
      name: 'Stars',
      sortable: true,
      cell: row => <p>{row.cardData.watchers}</p>
    }
  ];


  render() {
    return <DataTable
      columns={this.columns}
      data={this.props.data}
      highlightOnHover
      pagination
      paginationPerPage={5}
      paginationRowsPerPageOptions={[5, 15, 25, 50]}
      paginationComponentOptions={{
        rowsPerPageText: 'Records per page:',
        rangeSeparatorText: 'out of',
      }}
    />
  }
}

const mapStateToProps = state => ({
  data: state.cardItems
})
const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
