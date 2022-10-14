import React, {useState, useEffect} from 'react'
import filterSearch from '../utils/filterSearch'
import {getData} from '../utils/fetchData'
import {useRouter} from 'next/router'
import { countries } from './data'
import ReactSearchBox from "react-search-box";
import { FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Filter = ({state}) => {
    if (typeof document === 'undefined') {
        React.useLayoutEffect = React.useEffect;
      }
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [country, setCountry] = useState('')

    // const {categories} = state
    const router = useRouter()


    const handlecountry = (e) => {
        setCountry(e.target.value)
        filterSearch({router, country: e.target.value})
    }

    const handleSort = (e) => {
        setSort(e.target.value)
        filterSearch({router, sort: e.target.value})
    }

    useEffect(() => {
        filterSearch({router, search: search ? search.toLowerCase() : 'all'})
    },[search])

    return (
        <div className="mb-5">
            <Grid container spacing={4}>
               <Grid item xs={12} md={3} >
               
                <FormControl fullWidth variant="filled">
                    <InputLabel id="demo-simple-select-filled-label">Country</InputLabel>
                    <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={country}
                    onChange={handlecountry}
                    >
                    {
                        countries.map(item => (
                            <MenuItem key={item._id} value={item.name}>{item.name}</MenuItem>
                        ))
                    }
                   
                   
                    </Select>
                </FormControl>
               </Grid>
               <Grid item xs={12} md={6}>




               <TextField
               InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
                fullWidth placeholder='Search with title...' value={search.toLowerCase()} onChange={e => setSearch(e.target.value)} variant='filled'/>
               </Grid>
               <Grid item xs={12} md={3}>

               
                <FormControl fullWidth variant="filled">
                    <InputLabel id="demo-simple-select-filled-label">Sort by</InputLabel>
                    <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={sort}
                    onChange={handleSort}
                    >
                    <MenuItem value="createdAt">Newest</MenuItem>
                     <MenuItem value="-createdAt">Oldest</MenuItem>
                     
                     <MenuItem value="-salary">Salary: High-Low</MenuItem>
                     <MenuItem value="salary">Salary: Low-High</MenuItem>
                   
                   
                    </Select>
                </FormControl>
               </Grid>
            </Grid>
            {/* <div className="col-12 col-md-2 mw-100">
                <select className="custom-select text-capitalize"
                value={country} onChange={handlecountry}>

                    <option value="all">All Products</option>

                    {
                        countries.map(item => (
                            <option key={item._id} value={item._id}>{item.name}</option>
                        ))
                    }
                </select>
            </div> */}

            {/* <form autoComplete="off" className="">
                <input type="text" className="form-control" list="title_product"
                value={search.toLowerCase()} onChange={e => setSearch(e.target.value)} />
            </form> */}
            {/* <div className='col-12 col-md-8 mw-100'>

            <ReactSearchBox
                placeholder="Placeholder"
                value="Doe"
                
                callback={(record) => console.log(record)}
            />
            </div>
            <div className="col-12 col-md-2 mw-100" >
                <select className="custom-select text-capitalize"
                value={sort} onChange={handleSort}>

                     <option value="-createdAt">Newest</option>
                     <option value="oldest">Oldest</option>
                     <option value="-sold">Best sales</option>
                     <option value="-price">Price: Hight-Low</option>
                     <option value="price">Price: Low-Hight</option>

                </select>
            </div> */}


        </div>
    )
}

export default Filter
